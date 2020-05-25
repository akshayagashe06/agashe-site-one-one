import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    );
  }
}

export default Footer;
