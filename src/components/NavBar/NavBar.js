import React from 'react';
import CartWidget from '../CartWidget.js/CartWidget';
import './NavBar.css'
/* Bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';
import { IoMusicalNote } from "react-icons/io5";

const NavBar = () => (
    <>
        <Navbar className="nav-border-gradient lead" bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
            <Navbar.Brand as={NavLink} exact to="/">
                <IoMusicalNote/>
                <strong>e-Must</strong> Albums
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} exact to="/">Productos</Nav.Link>
                <Nav.Link as={NavLink} exact to="/categorias">Categorias</Nav.Link>
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

