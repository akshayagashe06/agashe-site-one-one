import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import "./Common-style.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="sticky-nav">
        <Navbar.Brand href="/">Agashe Website</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default CustomNavbar;
