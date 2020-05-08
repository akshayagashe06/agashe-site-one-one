import React, { Component } from "react";
import { Link } from "reacr-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to my Website.</h2>
          <p>Lets see how this webiste goes.</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary"> About</Button>
        </Link>
      </Grid>
    );
  }
}

export default Home;
