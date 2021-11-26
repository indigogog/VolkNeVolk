import { React, Component } from "react";
import { Card, Row, Col, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";

export const BasketC = observer(
  class BasketC extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
            <CardGroup>
              <Row xs={1} md={1} lg={1} xl={1} xxl={1}>
                {this.props.butstore.data.map((item)=>(
                    <Col key={item.key}>
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
                <Button variant="outline-info" onClick={()=> this.props.butstore.dec(this.props.dtem)} >
                          Удалить из корзины
                        </Button>
              </Card.Body>
            </Card>
          </Col> 
                ))}
              </Row>
            </CardGroup>
            </div>
        )}
});