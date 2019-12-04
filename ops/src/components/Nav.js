import React from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'

// images and css
import logo from '../images/opsLogo.jpg'
import '../App.css'

export default function Nav() {
    return (
        <Container>    
            <Navbar expand="sm" bg="light" variant="dark" className="header">
                <Navbar.Brand href="#home" className="logo-header">
                    <Image
                        alt="ops-logo"
                        src={ logo }
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        rounded
                    />
                </Navbar.Brand>
                <p className="logo-text">We Provide Security</p>
            </Navbar>
            
        </Container>
    )
}
