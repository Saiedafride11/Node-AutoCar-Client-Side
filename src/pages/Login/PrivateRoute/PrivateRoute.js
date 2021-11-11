import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading} = useAuth();
    if(isLoading){
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
            user.displayName ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
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

export default PrivateRoute;