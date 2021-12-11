import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'

function Footer() {
    return (
        <footer className="bg-dark py-4 footer-border-gradient">
            <Container>
                <p className="text-white m-0">
                    <strong>Esteban Demarchi | Curso React CoderHouse 2021</strong>
                </p>
            </Container>
        </footer>
    )
}

export default Footer
