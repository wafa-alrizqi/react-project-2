import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
  <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href='/react-project-2'>Plants Zone</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Search">Search</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default Header

