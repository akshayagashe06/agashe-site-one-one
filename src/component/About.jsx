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
import "./About.css";
import MyImageSlider from "./MyImageSlider.jsx";
import Footer from "./Footer.jsx";
import PhotoViewer from "./PhotoViewer.jsx";

class About extends Component {
  render() {
    return (
      <Container>
        <MyImageSlider />
        <Jumbotron>
          <PhotoViewer />
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                Put your comments here and you will hear back from me soon!
              </Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Jumbotron>
        <Footer />
      </Container>
    );
  }
}

export default About;
