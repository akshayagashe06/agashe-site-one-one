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
import PhotoViewer from "./PhotoViewer.jsx";

class News extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <Form>
            <div className="mb-3">
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input isValid />
                <Form.File.Label data-browse="Button text">
                  Custom file input
                </Form.File.Label>
                <Form.Control.Feedback type="valid">
                  You did it!
                </Form.Control.Feedback>
              </Form.File>
            </div>
            <div className="mb-3">
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Regular file input</Form.File.Label>
                <Form.File.Input />
              </Form.File>
            </div>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your name</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter your story here</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
          <PhotoViewer />
        </Container>
      </Jumbotron>
    );
  }
}

export default News;
