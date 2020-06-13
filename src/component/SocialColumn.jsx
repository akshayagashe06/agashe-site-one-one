import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/SocialMediaData.json";
import "./Common-style.css";

class SocialColumn extends Component {
  sampleJSON = {
    string: "PluralSight",
    number: 1,
  };

  render(props) {
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        <Image
          src="assets/instagram-logo.png"
          roundedCircle
          className="profile-pic"
        />
        {data.socialMediaData.map((name1, index) => (
          <div>
            <h3 class="socialMedia-header-style">{name1.name}</h3>
            <p>{name1.Description}</p>
          </div>
        ))}
      </Col>
    );
  }
}

export default SocialColumn;
