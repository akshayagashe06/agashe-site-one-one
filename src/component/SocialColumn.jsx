import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/SocialMediaData.js";

class SocialColumn extends Component {
  render(props) {
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        <Image
          src="assets/instagram-logo.png"
          roundedCircle
          className="profile-pic"
        />
        <h3>Akshay</h3>
        <p>This is some text in a column</p>
      </Col>
    );
  }
}

export default SocialColumn;
