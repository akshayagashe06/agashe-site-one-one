import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>This is About Page.</h2>
          <p>Lets see how this webiste goes.</p>
        </Jumbotron>
      </Container>
    );
  }
}

export default About;
