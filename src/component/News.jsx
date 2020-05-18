import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

class News extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>This is News Page.</h2>
          <p>Lets see how this webiste goes.</p>
        </Jumbotron>
      </Container>
    );
  }
}

export default News;
