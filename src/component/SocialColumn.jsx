import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/SocialMediaData.json";
import "./Common-style.css";

class SocialColumn extends Component {
  render(props) {
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        <Image
          src="assets/instagram-logo.png"
          roundedCircle
          className="profile-pic"
        />
        <h3 class="socialMedia-header-style">Akshay</h3>
        <p>This is some text in a column</p>
      </Col>
    );
  }
}

export default SocialColumn;
