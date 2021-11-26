import { React, Component } from "react";
import { Card, Row, Col, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";

export const CardsC = observer(
  class CardsC extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Col key={this.props.dtem.key}>
            <Card
              text="white"
              style={{
                width: "19rem",
                background: "rgba(42, 1, 58, 0)",
              }}
              className="gg-2"
              border="info"
            >
              <Card.Img
                variant="top"
                src={this.props.dtem.srcImage}
                className="CardImage"
              />
              <Card.Body>
                <Card.Title>{this.props.dtem.title} </Card.Title>
                <Card.Text>{this.props.dtem.text}</Card.Text>
                <Button variant="outline-info" onClick={()=> this.props.butstore.inc(this.props.dtem)} >
                          Открыть
                        </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    }
  }
);
