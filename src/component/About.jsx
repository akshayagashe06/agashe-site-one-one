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

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <MyImageSlider />
          <Jumbotron>
            <PhotoViewer />
            <section className="splitter-section" />
            <Form className="form-style">
              <h3>Write your mind out!</h3>
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
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
