import { React, Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";
import Alert from "react-bootstrap/Alert";

export const CardsC = observer(
  class CardsC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        alert: true,
      };
    }

    AlertRender() {
      if (this.state.alert) {
        return (
          <Button
            variant="outline-info"
            onClick={() => {
              if (this.state.alert) {
                this.setState({ alert: false });
                this.props.Add(this.props.dtem);
              }
            }}
          >
            В корзину
          </Button>
        );
      }
      else{
        return(
          <Alert variant="info" dismissible>
        <Alert.Heading>Отличный выбор!</Alert.Heading>
        <p>
          {this.props.dtem.title} добавлен в корзину
        </p>
      </Alert>
        )
      }
    }

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
                {this.AlertRender()}
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    }
  }
);
