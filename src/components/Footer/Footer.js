import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'

function Footer() {
    return (
        <footer className="bg-dark py-4 footer-border-gradient">
            <Container>
                <p className="text-white m-0 text-center">
                    <strong>Esteban Demarchi</strong> | Curso React CoderHouse 2021
                </p>
            </Container>
        </footer>
    )
}

export default Footer
