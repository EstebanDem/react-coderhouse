import React from 'react';
import CartWidget from '../CartWidget.js/CartWidget';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MockedCategories from '../../mock/MockedCategories';
import { IoMusicalNote } from "react-icons/io5";

const yellowMusicalNote = {
    color: '#efcf17'
}

const NavBar = () => (

    <Navbar className="nav-border-gradient lead" bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
            <Navbar.Brand as={NavLink} exact to="/">
                <IoMusicalNote style={yellowMusicalNote} />
                <strong>e-Must</strong> Albums
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} exact to="/">Productos</Nav.Link>
                    <NavDropdown title="Categorias">
                        {MockedCategories.map((mockedCategory, index) => {
                            return (
                                <NavDropdown.Item as={NavLink} to={`/categorias/${mockedCategory.id}`} >
                                    {mockedCategory.name}
                                </NavDropdown.Item>
                            )
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} exact to="/categorias">Ver todas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to='/cart'>
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

);

export default NavBar;

