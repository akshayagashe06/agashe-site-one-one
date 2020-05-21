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
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}

export default News;
