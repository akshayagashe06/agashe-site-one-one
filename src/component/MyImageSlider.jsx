import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class MyImageSlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/porsche-911.jpg"
            alt="My Photo"
            height="500"
          />
          <Carousel.Caption>
            <h3>Ferrari California</h3>
            <p>
              This is my favourite car. The Ferrari design at its very best.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/MidtownAtlanta_.jpg"
            alt="Second slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>Porsche 911</h3>
            <p>The handling in the Porsche is the one to enjoy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/MidtownAtlanta_.jpg"
            alt="Third slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>Porsche Macan</h3>
            <p>Prosche Engineering with its practicality and power.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyImageSlider;
