import { React, Component } from "react";
import { Row, CardGroup} from "react-bootstrap";
import { observer } from "mobx-react";
import { QuotesStore } from "../stores";
import "./styles/But.css";
import { CardsC } from "./CardsC";

const store = new QuotesStore();

export const QuotesC = observer(
  class QuotesC extends Component {
    render() {
      return (
        <div className="start">
        <div style={{ color: "white" }}>
              <h3>
                Однажды я забежал в японский ресторан, чтобы переждать проливной
                дождь. Но, видимо, вымок так сильно, что меня снова потянуло на
                воду и морепродукты. Вот так я и оказался любителем суши.
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
