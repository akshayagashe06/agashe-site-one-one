import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import "./Common-style.css";
import MyImageSlider from "./MyImageSlider.jsx";
import Footer from "./Footer.jsx";
import PhotoViewer from "./PhotoViewer.jsx";
import data from "../data/MySliderData.json";
var myHobbiesData = data.HomePageSlider;

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>About Me!</h1>
            <p>
              This section talks about my hobbies, my career and my personal
              ambition.
            </p>
          </Jumbotron>
          <Jumbotron className="jumbotron-sizing">
            <section className="splitter-section-no-border" />
            <h3>Somethings that I like!</h3>
            <PhotoViewer />
            <section className="splitter-section-no-border" />
          </Jumbotron>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
