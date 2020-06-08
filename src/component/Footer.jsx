import React, { Component } from "react";
import { Card, Col, Row, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Common-style.css";

class Footer extends Component {
  render() {
    return (
      <Card bg="dark" text="white" className="footer-mainCard">
        <Card.Body>
          <Row>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Important Links</h3>
              <h6>
                <Link className="footer-link" to="/news">
                  News
                </Link>
              </h6>
              <h6>
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </h6>
              <ButtonGroup className="mb-2">
                <Button className="insta-button-cls"></Button>
                <Button className="twitter-button-cls"></Button>
                <Button className="linkedin-button-cls"></Button>
              </ButtonGroup>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">My projects</h3>
              <h6>Automated Society Billing</h6>
              <h6>Amazon MWS-Tally</h6>
              <h6>Job Search from Web Semantic</h6>
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
