import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../data/MySliderData.json";

class MyImageSlider extends Component {
  render() {
    return (
      <Carousel>
        {data.HomePageSlider.map((myUniversity, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={myUniversity.image}
              alt="My Photo"
              height="500"
            />
            <Carousel.Caption>
              <h3>{myUniversity.title}</h3>
              <p>{myUniversity.Description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MyImageSlider;
