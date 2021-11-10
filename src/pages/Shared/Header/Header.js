import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user} = useAuth()
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default Header;