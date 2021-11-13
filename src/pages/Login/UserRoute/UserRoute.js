import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading} = useAuth();
    if(isLoading && user){
      return <div className="mx-auto w-50 loading">
              <Box>
                 <LinearProgress />
              </Box>
      </div>;
  }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user?.displayName && !admin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              >
              </Redirect>
            )
          }
        >
      </Route>
    );
};

export default UserRoute;