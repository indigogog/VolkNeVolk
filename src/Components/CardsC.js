import { React, Component } from "react";
import { Card,  Col,  Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";

export const CardsC = observer(
  class CardsC extends Component {
    render() {
      return (
        <div>
          <Col>
            <Card
              text="white"
              style={{
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
                <Button variant="outline-info" onClick={()=> this.props.Add(this.props.dtem)} >
                          В корзину
                        </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    }
  }
);
