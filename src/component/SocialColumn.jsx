import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/SocialMediaData.json";
import "./Common-style.css";

class SocialColumn extends Component {
  render(props) {
    var clickedButton = this.props.name;
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        {data.socialMediaData
          .filter((mediaName) => mediaName.name == clickedButton)
          .map((name1, index) => (
            <div>
              <Image src={name1.image} roundedCircle className="profile-pic" />
              <h3 class="socialMedia-header-style">{name1.name}</h3>
              <p>{name1.Description}</p>
              <p>{this.props.name}</p>
            </div>
          ))}
      </Col>
    );
  }
}

export default SocialColumn;
