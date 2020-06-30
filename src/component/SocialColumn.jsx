import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/SocialMediaData.json";
import "./Common-style.css";

class SocialColumn extends Component {
  render(props) {
    return (
      <Col xs={12} sm={4} className="person-wrapper">
        {data.socialMediaData
          .filter((mediaName) => mediaName.name == this.props.name)
          .map((MySocialHandler) => (
            <div>
              <Image
                src={MySocialHandler.image}
                roundedCircle
                className="profile-pic"
                height="200"
                width="200"
              />
              <h2 class="socialMedia-header-style">{MySocialHandler.name}</h2>
              <p>{MySocialHandler.Description}</p>
            </div>
          ))}
      </Col>
    );
  }
}

export default SocialColumn;
