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
          <Link to="/about">
            <Button bsStyle="primary"> About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/MidtownAtlanta_.jpg"
              circle
              className="profile-pic"
            />
            <h3>Akshay</h3>
            <p>This is some text in a column</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/MidtownAtlanta_.jpg"
              circle
              className="profile-pic"
            />
            <h3>Akshay</h3>
            <p>This is some text in a column</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/MidtownAtlanta_.jpg"
              circle
              className="profile-pic"
            />
            <h3>Akshay</h3>
            <p>This is some text in a column</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
