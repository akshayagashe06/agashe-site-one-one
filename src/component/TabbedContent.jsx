import React, { Component } from "react";
import { Col, Row, Tab, ListGroup, Sonnet } from "react-bootstrap";
import { Link } from "react-router-dom";

class TabbedContent extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#Link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#Link1">
                  <h2>Project 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In ante metus dictum at tempor commodo ullamcorper.
                    Fusce ut placerat orci nulla pellentesque dignissim. Vel
                    fringilla est ullamcorper eget nulla facilisi. Nec nam
                    aliquam sem et tortor consequat id porta. Quam pellentesque
                    nec nam aliquam sem et. A cras semper auctor neque vitae
                    tempus quam. Rhoncus est pellentesque elit ullamcorper
                    dignissim cras. Sem integer vitae justo eget. At in tellus
                    integer feugiat scelerisque varius morbi. Arcu bibendum at
                    varius vel pharetra vel turpis nunc eget. Vivamus at augue
                    eget arcu dictum. Vitae auctor eu augue ut lectus arcu
                    bibendum. Tristique senectus et netus et malesuada fames ac
                    turpis. Laoreet sit amet cursus sit amet dictum sit amet.
                    Sed enim ut sem viverra aliquet eget sit. Leo in vitae
                    turpis massa sed elementum tempus egestas sed. Nunc vel
                    risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Vel eros donec ac odio tempor orci. In egestas erat
                    imperdiet sed euismod nisi porta lorem. Pretium aenean
                    pharetra magna ac placerat vestibulum lectus mauris.
                    Ultricies mi eget mauris pharetra et ultrices. Sit amet
                    consectetur adipiscing elit pellentesque habitant morbi
                    tristique. Varius sit amet mattis vulputate enim. Tincidunt
                    ornare massa eget egestas purus viverra accumsan in. Lacinia
                    at quis risus sed vulputate. Malesuada bibendum arcu vitae
                    elementum curabitur vitae nunc sed velit. Ipsum dolor sit
                    amet consectetur adipiscing elit pellentesque. Dignissim
                    cras tincidunt lobortis feugiat vivamus. Maecenas ultricies
                    mi eget mauris pharetra et. Leo urna molestie at elementum
                    eu facilisis. Adipiscing at in tellus integer feugiat
                    scelerisque. Cras sed felis eget velit aliquet sagittis id.
                    Eget est lorem ipsum dolor. Id diam vel quam elementum
                    pulvinar etiam non quam lacus. Phasellus egestas tellus
                    rutrum tellus. In eu mi bibendum neque egestas congue
                    quisque. Pellentesque dignissim enim sit amet. Ultrices
                    tincidunt arcu non sodales neque sodales ut. Tristique nulla
                    aliquet enim tortor. Suspendisse sed nisi lacus sed viverra.
                    Laoreet suspendisse interdum consectetur libero id faucibus
                    nisl. Lobortis elementum nibh tellus molestie nunc non
                    blandit massa. Ullamcorper sit amet risus nullam eget felis
                    eget nunc lobortis. Imperdiet sed euismod nisi porta. Mi in
                    nulla posuere sollicitudin aliquam ultrices. Amet aliquam id
                    diam maecenas ultricies mi eget mauris. Eget nunc
                    scelerisque viverra mauris. Ultrices gravida dictum fusce ut
                    placerat orci. Massa vitae tortor condimentum lacinia quis
                    vel. Sollicitudin ac orci phasellus egestas tellus rutrum
                    tellus pellentesque. Vel risus commodo viverra maecenas.
                    Lectus quam id leo in. Sed faucibus turpis in eu mi bibendum
                    neque. Tincidunt id aliquet risus feugiat in. Justo laoreet
                    sit amet cursus sit amet dictum. Nullam eget felis eget
                    nunc. Consectetur libero id faucibus nisl. Ut etiam sit amet
                    nisl purus in. Aliquam sem et tortor consequat. Varius quam
                    quisque id diam vel. Eget est lorem ipsum dolor sit amet
                    consectetur. Pharetra diam sit amet nisl suscipit adipiscing
                    bibendum est. Duis convallis convallis tellus id interdum
                    velit. Tellus mauris a diam maecenas sed. Arcu cursus
                    euismod quis viverra nibh cras pulvinar. Proin fermentum leo
                    vel orci porta non pulvinar. Neque ornare aenean euismod
                    elementum nisi quis. Nisi vitae suscipit tellus mauris a
                    diam maecenas sed enim.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <h2>Project 2</h2>
                  <p>Hey how do you do?</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default TabbedContent;
