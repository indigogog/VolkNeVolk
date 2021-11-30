import { React, Component } from "react";
import { Card, Row, Col, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";

export const BasketC = observer(
  class BasketC extends Component {
    render() {
      return (
        <div className="test">
          <CardGroup>
          <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
              {this.props.basketData.map((item,index) => (
                <Col key={index}>
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
                      src={item.srcImage}
                      className="CardImage"
                    />
                    <Card.Body>
                      <Card.Title>{item.title} </Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          console.log(item.title);
                          this.props.delFromBasket(item);
                        }}
                      >
                        Удалить из корзины
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>
        </div>
      );
    }
  }
);
