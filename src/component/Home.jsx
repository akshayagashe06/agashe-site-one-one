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
      <Container>
        <Jumbotron>
          <h2>This is all about me.</h2>
          <p>Find my Blogs, love for software and cars here on my website.</p>
          <Link to="/about">
            <Button bsStyle="primary"> About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <SocialColumn name="LinkedIn" />
          <SocialColumn name="Instagram" />
          <SocialColumn name="Twitter" />
        </Row>
        <MyImageSlider />
        <Footer />
      </Container>
    );
  }
}

export default Home;
