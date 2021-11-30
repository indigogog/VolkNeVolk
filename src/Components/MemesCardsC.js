import { React, Component } from "react";
import { Row, CardGroup } from "react-bootstrap";
import { observer } from "mobx-react";
import { MemesStore } from "../stores";
import "./styles/But.css";
import { CardsC } from "./CardsC";

const store = new MemesStore();

export const MemesCardsC = observer(
  class MemesCardsC extends Component {
    render() {
      return (
        <div className="start">
        <div style={{ color: "white" }}>
              <h3>
                Когда очень хочется пиццы, то ее прекрасный образ начинает
                неумолимо преследовать тебя, пока ты ждешь, когда в дверь
                позвонит долгожданный курьер. От нетерпения смотришь в окно,
                видишь луну, и она кажется тебе не холодной луной, а горячей
                пиццей!
            </h3>{" "}
        </div>
          <div className="test">
          <CardGroup className="group">
              <Row xs={1} md={1} lg={2} xl={3} xxl={3}>
                {store.dats.map((item, index) => {
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
