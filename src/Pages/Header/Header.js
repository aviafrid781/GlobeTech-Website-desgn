import React from 'react';
import { Button, Container, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logos from '../../imgage/globetechlogo.png'
import './Header.css'
const Header = () => {
    return (
        <Navbar bg=" #05033ff6" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logos}
                        width="210"
                        height="42"
                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>
                <Nav className='nav'>
                    <Nav.Link as={Link} to="home"     style={{  width: "64", height: "32" }}>Home</Nav.Link>
                    <Nav.Link as={Link} to="services" style={{   width: "64", height: "32" }}>Services</Nav.Link>
                    <Nav.Link as={Link} to="login"    style={{  width: "64", height: "32" }}>Login</Nav.Link>

                </Nav>
            </Container>
        </Navbar>


    );
};

export default Header;