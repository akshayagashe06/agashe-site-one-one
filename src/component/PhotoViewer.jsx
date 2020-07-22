import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import data from "../data/CardData.json";

class PhotoViewer extends Component {
  render() {
    return (
      <CardDeck>
        {data.AboutPageCard.map((MyHobbiesHandler) => (
          <Card>
            <Card.Img
              variant="top"
              src={MyHobbiesHandler.image}
              height="100"
              width="100"
            />
            <Card.Body>
              <Card.Title>{MyHobbiesHandler.name}</Card.Title>
              <Card.Text>{MyHobbiesHandler.Description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    );
  }
}

export default PhotoViewer;
