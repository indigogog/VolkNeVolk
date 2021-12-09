import { React, Component } from "react";
import { Card, Row, Col, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";
import "./styles/But.css";

export const BasketC = observer(
  class BasketC extends Component {
    render() {
      return (
        <div className="test">
          <CardGroup className="Basketgroup">
              <Row xs={1} md={1} lg={1} xl={1} xxl={1}>
              {this.props.mainstore.data.map((item,index) => (
                <Col key={index}>
                  <Card
                    style={{background: "rgba(42, 1, 58, 0)",}}
                    text="white"
                    className="BasketCard"
                    border="info"
                  >
                    <Card.Img
                      variant="top"
                      src={item.srcImage}
                      className="BasketCardImage"
                    />
                    <Card.Body>
                      <Card.Title>{item.title} </Card.Title>
                    </Card.Body>
                    <Button
                        variant="outline-info"
                        onClick={() => {
                          this.props.store.dec(item);
                        }}
                        className="BasketCardButton"
                      >
                        Удалить из корзины
                      </Button>
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
