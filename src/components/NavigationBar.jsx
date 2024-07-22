import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar () {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Minha loja</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/signup">Cadastro</Nav.Link>
          <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
