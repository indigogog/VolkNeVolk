import { React, Component } from "react";
import { Row, CardGroup } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/But.css";
import { CardsC } from "./CardsC";


export const MemesCardsC = observer(
  class MemesCardsC extends Component {
    render() {
      return (
        <div className="start">
        <div style={{ color: "white" }}>
              <h3>
                {this.props.mystring}
            </h3>{" "}
        </div>
          <div className="test">
          <CardGroup className="group">
              <Row xs={1} md={1} lg={2} xl={3} xxl={3}>
                {this.props.datastore.map((item, index) => {
                  return (
                    <CardsC
                      dtem={item}
                      Add={(item) => {
                        this.props.addToBasket(item);
                      }}
                      key={item.key}
                    />
                  );
                })}
              </Row>
            </CardGroup>
          </div>
        </div>
      );
    }
  }
);
