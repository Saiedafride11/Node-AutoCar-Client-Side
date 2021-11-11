import * as React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';


export default function PrimarySearchAppBar() {
    const {user, logOut} = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
            <img src={user?.photoURL} className="w-50 rounded-circle mx-auto" alt="" />
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
            <Link to="/payment" style={{color: '#1976d2'}}>Payment</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Link to="/order" style={{color: '#1976d2'}}>My Orders</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Link to="/review" style={{color: '#1976d2'}}>Review</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Button onClick={logOut} variant="contained">LogOut</Button>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
            <Link to="/manageorder" style={{color: '#1976d2'}}>Manage ALL Orders</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Link to="/manageproducts" style={{color: '#1976d2'}}>Manage Products</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Link to="/addproducts" style={{color: '#1976d2'}}>Add Products</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Link to="/makeadmin" style={{color: '#1976d2'}}>Make Admin</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
            <Button onClick={logOut} variant="contained">LogOut</Button>
        </MenuItem>

      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
            <Box className="header-mobile-menu">
                <Link to="/home" style={{color: '#1976d2', marginRight : '20px'}}>Home</Link>
                <Link to="/cars" style={{color: '#1976d2', marginRight : '20px'}}>Cars</Link>
                <Link to="/contact" style={{color: '#1976d2', marginRight : '20px'}}>Contact Us</Link>
                <Link to="/about" style={{color: '#1976d2', marginRight : '20px'}}>About Us</Link>
            </Box>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            style={{color: '#1976d2'}}
          >
            <AccountCircle />
          </IconButton>
          <p style={{textTransform: 'capitalize', marginTop: '15px'}}>{user?.displayName}</p>
        </MenuItem>
      </Menu>
    );

  return (
    <Box sx={{ flexGrow: 1 }} className="header-container">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Auto Car
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box className="header-menu">
                <Link to="/home" style={{color: '#fff', marginRight : '20px'}}>Home</Link>
                <Link to="/cars" style={{color: '#fff', marginRight : '20px'}}>Cars</Link>
                <Link to="/contact" style={{color: '#fff', marginRight : '20px'}}>Contact Us</Link>
                <Link to="/about" style={{color: '#fff', marginRight : '20px'}}>About Us</Link>
                {   
                    user?.displayName ?
                    <>
                    <span style={{color: 'rgba(255,255,255,.55)'}}>Hello:</span>&nbsp;<span style={{textTransform: 'capitalize'}}>{user?.displayName}</span>
                    </>
                    :
                    <Link to="/login" style={{color: '#fff', marginRight : '20px'}}>Login</Link>
                }
            </Box>
            {   
                user?.displayName ?
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                <AccountCircle />
                </IconButton>
                :
                ''
            }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
