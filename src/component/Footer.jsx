import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Body>
          <Row>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Akshay</h3>
              <p>This is some text in a column</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Akshay</h3>
              <p>This is some text in a column</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Akshay</h3>
              <p>This is some text in a column</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
