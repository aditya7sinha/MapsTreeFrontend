import React from 'react'
// import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBars({token}) {
  if(token){
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">MapsTree</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        )
  }
  return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">MapsTree</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
            <Nav.Link href="signin">SignIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBars