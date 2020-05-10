import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to my Website.</h2>
          <p>Lets see how this webiste goes.</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary"> About</Button>
        </Link>
      </Container>
    );
  }
}

export default Home;
