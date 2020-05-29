import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Body>
          <Row>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3>Important Links</h3>
              <h6>News</h6>
              <h6>About</h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3>My projects</h3>
              <h6>Project 1</h6>
              <h6>Project 2</h6>
              <h6>Project 3</h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3>Helpful links</h3>
              <h6>Formula One</h6>
              <h6>Cricket</h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3>Contact</h3>
              <h6>Email</h6>
              <h6>Phone</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
