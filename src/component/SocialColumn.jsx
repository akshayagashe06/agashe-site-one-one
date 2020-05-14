import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

class SocialColumn extends Component {
  render() {
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        <Image
          src="assets/MidtownAtlanta_.jpg"
          circle
          className="profile-pic"
        />
        <h3>Akshay</h3>
        <p>This is some text in a column</p>
      </Col>
    );
  }
}

export default SocialColumn;
