import { React,  useContext} from "react";
import { Button, Card, Row, Col, CardGroup } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/Cards.css";
import { StoreContext } from "../index";



export const HomeWolfCardsC = observer(
 function HomeWolfCardsC(props) {

  const store = useContext(StoreContext);
  
      return (
        <div>
          <div className="text">
            <h1>На нашем сайте вы сможете найти:</h1>
          </div>
          <div className="test">
          <CardGroup>
              <Row xs={1} md={2} lg={3} xl={4} xxl={6}>
                {store.homeWolf.dats.map((item) => (
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
                        src={item.srcImage}
                        className="CardImage"
                      />
                      <Card.Body>
                        <Card.Title>{item.title} </Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                        <Button variant="outline-info" href={item.buttonHref} onClick={()=>{props.ch(item.key)}} className="buttons">
                          Открыть
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CardGroup>
          </div>
        </div>
      );
    
  }
);
