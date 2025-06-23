
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Container, Row, Col, Navbar, Nav, Button,  } from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       {/* <Navbar className='container-fluid myNavbar  position-fixed Navbar  md-noviseble	navbar-expand-lg'>

        <div className="container-fluid d-flex nev-flex">
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <ul className='text-decoration-none text-dark ' id="navbarSupportedContent" >
                <li>
                 Home
                </li>
                 <li>
                 About
                </li>
                 <li>
                 Service
                </li>
            </ul>

            <div className='text-4xl jokk'>
                <h1>Barnd</h1>
            </div>

            <div>
                <button className='nevbtn'>
                    Get Srtated
                </button>
                </div>
        </div>
       </Navbar> */}


       <Navbar expand="lg"  className="py-3 myNavbar">
        <Container>
          <Navbar.Brand href="#">Barnd</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Service</Nav.Link>
            </Nav>
            <Button variant="outline-primary">Get Started</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
