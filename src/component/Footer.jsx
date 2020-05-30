import React, { Component } from "react";
import { Card, Col, Row, ButtonGroup, Button } from "react-bootstrap";
import "./Home.css";

class Footer extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Body>
          <Row>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Important Links</h3>
              <h6>News</h6>
              <h6>About</h6>
              <ButtonGroup className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">My projects</h3>
              <h6>Project 1</h6>
              <h6>Project 2</h6>
              <h6>Project 3</h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Helpful links</h3>
              <h6>Formula One</h6>
              <h6>Cricket</h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Contact</h3>
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
