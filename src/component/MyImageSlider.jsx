import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../data/MySliderData.json";

class MyImageSlider extends Component {
  render() {
    var clickedButton = this.props.name;
    return (
      <Carousel>
        {data.HomePageSlider.map((name1, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={name1.image}
              alt="My Photo"
              height="500"
            />
            <Carousel.Caption>
              <h3>{name1.title}</h3>
              <p>{name1.Description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MyImageSlider;
