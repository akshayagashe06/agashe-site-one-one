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
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </h6>
              <h6>
                <Link className="footer-link" to="/blog">
                  Blogs
                </Link>
              </h6>
              <ButtonGroup className="mb-2">
                <Link to="/insta-route">
                  <Button className="insta-button-cls"></Button>
                </Link>
                <Link to="/twitter-route">
                  <Button className="twitter-button-cls"></Button>
                </Link>
                <Link to="/linkedin-route">
                  <Button className="linkedin-button-cls"></Button>
                </Link>
              </ButtonGroup>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">My projects</h3>
              <h6>
                <Link className="footer-link" to="/git-society-route">
                  Automated Society Billing
                </Link>
              </h6>
              <h6>Amazon MWS-Tally</h6>
              <h6>
                <Link className="footer-link" to="git-jobSearch-route">
                  Job Search from Web Semantic
                </Link>
              </h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Helpful links</h3>
              <h6>
                <Link className="footer-link" to="formula1-route">
                  Formula One
                </Link>
              </h6>
              <h6>
                <Link className="footer-link" to="cricbuzz-route">
                  Cricket
                </Link>
              </h6>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <h3 className="footer-title-style">Contact</h3>
              <h6>Email - akshay_agashe@yahoo.com</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
