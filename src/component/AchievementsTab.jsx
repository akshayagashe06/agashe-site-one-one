import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import data from "../data/AcheievmentsData.json";
import "./Common-style.css";

class AchievementsTab extends Component {
  render() {
    return (
      <div>
        <Col xs={12} sm={4} className="person-wrapper">
          {data.achievementData
            .filter((mediaName) => mediaName.name == this.props.name)
            .map((MyAchieveHandler) => (
              <div>
                <Image
                  src={MyAchieveHandler.image}
                  rounded
                  className="profile-pic"
                  height="100"
                  width="100"
                />
                <h2 class="socialMedia-header-style">
                  {MyAchieveHandler.name}
                </h2>
                <p>{MyAchieveHandler.Description}</p>
              </div>
            ))}
        </Col>
      </div>
    );
  }
}

export default AchievementsTab;
