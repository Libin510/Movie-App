import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Hme() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>

      <Navbar.Brand href="#home" ><img src='https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg' style={{width:'80px',height:'70px'}} /> </Navbar.Brand>

      <Nav className="me-auto">
      <Nav.Link href="#home"> <Link to='/' style={{textDecoration:'none' ,color:'white'}}> Popular Movies </Link></Nav.Link>
      <Nav.Link href="#home"> <Link to='/comedy' style={{textDecoration:'none' ,color:'white'}}> Comedy Movies </Link></Nav.Link>
      <Nav.Link href="#home"> <Link to='/latest' style={{textDecoration:'none' ,color:'white'}}> Latest Movies </Link></Nav.Link>


      </Nav>
     
    </Container>
  </Navbar>
  </div>
  )
}

export default Hme