import { React, Component } from "react";
import { Button, Card, Row, Col, CardGroup } from "react-bootstrap";
import { observer } from "mobx-react";
import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from "mobx";
import "./styles/Cards.css";

export const HomeWolfCardsC = observer(
  class HomeWolfCardsC extends Component {
    render() {
      return (
        <div className="test">
          <CardGroup>
            <Row xs={1} md={2} lg={2} xl={4} xxl={4}>
              <Col>
                <Card
                  text="white"
                  style={{ width: "18rem", background: "rgba(42, 1, 58, 0)" }}
                  className="mb-2"
                  border="info"
                >
                  <Card.Img
                    variant="top"
                    src="https://www.meme-arsenal.com/memes/3bcd57d0767d6ca86797870061e1d773.jpg"
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>Мемы про волков </Card.Title>
                    <Card.Text>В том числе и про цирк</Card.Text>
                    <Button variant="outline-info">Открыть</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card
                  text="white"
                  style={{ width: "18rem", background: "rgba(42, 1, 58, 0)" }}
                  className="mb-2"
                  border="info"
                >
                  <Card.Img
                    variant="top"
                    src="https://www.meme-arsenal.com/memes/476180b6197a4a158196326cbea37281.jpg"
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>Цитаты волков </Card.Title>
                    <Card.Text>Работа не волк, волк - walk</Card.Text>
                    <Button variant="outline-info">Открыть</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  text="white"
                  style={{ width: "18rem", background: "rgba(42, 1, 58, 0)" }}
                  className="mb-2"
                  border="info"
                >
                  <Card.Img
                    variant="top"
                    src="https://www.meme-arsenal.com/memes/27eceb078fff751d0fbc707c644c7478.jpg"
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>Серьёзные волки </Card.Title>
                    <Card.Text>На самом деле нет</Card.Text>
                    <Button variant="outline-info">Открыть</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  text="white"
                  style={{ width: "18rem", background: "rgba(42, 1, 58, 0)" }}
                  className="mb-2"
                  border="info"
                >
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/m5T9cdFByEE/maxresdefault.jpg"
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>Walk </Card.Title>
                    <Card.Text>Walk </Card.Text>
                    <Button variant="outline-info">Walk</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      );
    }
  }
);
