import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import SocialColumn from "./SocialColumn.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to my Website.</h2>
          <p>Lets see how this webiste goes.</p>
          <Link to="/about">
            <Button bsStyle="primary"> About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <SocialColumn name="LinkedIn" />
          <SocialColumn name="Instagram" />
          <SocialColumn name="Twitter" />
        </Row>
      </Container>
    );
  }
}

export default Home;
