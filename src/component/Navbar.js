import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Footer,
} from "react-bootstrap";

export const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
