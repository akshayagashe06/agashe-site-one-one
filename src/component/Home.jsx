import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import SocialColumn from "./SocialColumn.jsx";
import MyImageSlider from "./MyImageSlider.jsx";
import Footer from "./Footer.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
          <Image src="assets/home-banner.jpeg" fluid />
          <Row className="show-grid text-center">
            <SocialColumn name="LinkedIn" />
            <SocialColumn name="Instagram" />
            <SocialColumn name="Twitter" />
          </Row>
          <MyImageSlider />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
