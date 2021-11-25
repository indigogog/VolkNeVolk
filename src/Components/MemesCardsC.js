import { React, Component } from "react";
import { Card, Row, Col, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { MemesStore } from "../stores";
import './styles/But.css'

const store = new MemesStore();

export const MemesCardsC = observer(
  class MemesCardsC extends Component {
    render() {
      return (
        <div>
          <div className="bbuutt">
            <Button variant="primary" onClick={store.dec}>
              -
            </Button>{" "}
            <span style={{color:"white"}}> {store.count} </span>
            <Button variant="primary" onClick={store.inc}>
              +
            </Button>{" "}
          </div>

          <div className="test">
            <CardGroup>
              <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
                {store.dats.map((item, index) =>{
                  if(store.count>index)
                    return (
                  <Col key={item.key}>
                    <Card
                      text="white"
                      style={{
                        width: "18rem",
                        background: "rgba(42, 1, 58, 0)",
                      }}
                      className="mb-2"
                      border="info"
                    >
                      <Card.Img
                        variant="top"
                        src={item.src}
                        className="CardImage"
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                )})}
              </Row>
            </CardGroup>
          </div>
        </div>
      );
    }
  }
);
