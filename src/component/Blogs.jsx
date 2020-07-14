import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import "./Common-style.css";
import Footer from "./Footer.jsx";
import TabbedContent from "./TabbedContent.jsx";

class Blogs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h2>BLOGS</h2>
            <p>
              This is where all my thoughts about politics, environment, sports
              are elaborated.
            </p>
            <TabbedContent />
          </Jumbotron>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Blogs;
