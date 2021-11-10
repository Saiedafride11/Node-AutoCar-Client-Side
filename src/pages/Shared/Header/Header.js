import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="header-container">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><img src="https://i.ibb.co/L00Wd3h/logo.png" className="w-100" alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {   
                                user?.displayName ?
                                    <Button onClick={logOut} variant="light" style={{color: '#ff7f47'}}>LogOut</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }&nbsp;&nbsp;
                            <Navbar.Text>
                                {   
                                    user?.displayName ? 
                                    ' Hello : '
                                    :
                                    ''
                                }
                            </Navbar.Text>
                            {
                                user?.displayName ?
                                    <NavDropdown title={user?.displayName} id="navbarScrollingDropdown">
                                        <div className="user-img">
                                            <img src={user?.photoURL} className="w-100 rounded-circle" alt="User" />
                                        </div>
                                        {   
                                            user?.displayName ?
                                                <div>
                                                    <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
                                                    <Nav.Link as={Link} to="/manageorders">Manage All Orders</Nav.Link>
                                                    <Nav.Link as={Link} to="/addservices">Add Service</Nav.Link>
                                                </div>
                                            :
                                            ''
                                        }
                                    </NavDropdown>
                                :
                                ''
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;