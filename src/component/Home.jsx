import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import "./Common-style.css";
import SocialColumn from "./SocialColumn.jsx";
import MyImageSlider from "./MyImageSlider.jsx";
import Footer from "./Footer.jsx";

import data from "../data/SocialMediaData.json";
var social = data.socialMediaData;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="banner-container">
          <Image src="assets/home-banner.jpeg" fluid />
          <div className="banner-centered">Agashe Website!</div>
        </div>
        <section className="splitter-section" />
        <Container>
          <Jumbotron>
            <Row className="show-grid text-center">
              <SocialColumn name="LinkedIn" />
              <SocialColumn name="Instagram" />
              <SocialColumn name="Twitter" />
            </Row>
            <MyImageSlider />
          </Jumbotron>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
