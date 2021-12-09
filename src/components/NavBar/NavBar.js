import React from 'react';
import CartWidget from '../CartWidget.js/CartWidget';
import './NavBar.css'
/* Bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => (
    <>
        <Navbar className="nav-border-gradient lead" bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link1">Productos</Nav.Link>
                <Nav.Link href="#link2">Categorias</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#">
                    <CartWidget/>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
);

export default NavBar;

