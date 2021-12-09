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
              {() => {
                switch (this.props.n) {
                  case 1:
                    return this.props.mainstore.pizzastring;
                  case 2:
                    return this.props.mainstore.sushistring;
                  case 3:
                    return this.props.mainstore.cofestring;
                }
              }}
            </h3>{" "}
          </div>
          <div className="test">
            <CardGroup className="group">
              <Row xs={1} md={1} lg={2} xl={3} xxl={3}>
                {() => {
                  switch (this.props.n) {
                    case 1:
                      return this.props.mainstore.pizzadata.map((item) => {
                        return (
                          <CardsC
                            dtem={item}
                            Add={(item) => {
                              this.props.mainstore.addToBasket(item);
                            }}
                            key={item.key}
                          />
                        );
                      });
                    case 2:
                      return this.props.mainstore.sushidata.map((item) => {
                        return (
                          <CardsC
                            dtem={item}
                            Add={(item) => {
                              this.props.mainstore.addToBasket(item);
                            }}
                            key={item.key}
                          />
                        );
                      });
                    case 3:
                      return this.props.mainstore.cofedata.map((item) => {
                        return (
                          <CardsC
                            dtem={item}
                            Add={(item) => {
                              this.props.addToBasket(item);
                            }}
                            key={item.key}
                          />
                        );
                      });

                  }
                }}
              </Row>
            </CardGroup>
          </div>
        </div>
      );
    }
  }
);
