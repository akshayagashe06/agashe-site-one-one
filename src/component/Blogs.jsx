import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import "./Common-style.css";
import Footer from "./Footer.jsx";

class Blogs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron></Jumbotron>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Blogs;
