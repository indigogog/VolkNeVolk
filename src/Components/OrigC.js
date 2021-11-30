import { React, Component } from "react";
import { Row, CardGroup} from "react-bootstrap";
import { observer } from "mobx-react";
import { OrigStore } from "../stores";
import "./styles/But.css";
import { CardsC } from "./CardsC";

const store = new OrigStore();

export const OrigC = observer(
  class OrigC extends Component {
    render() {
      return (
        <div className="start">
        <div style={{ color: "white"}}>
              <h3>
              Кофе — это не просто напиток, это — религия. Не знаю, как у Вас, а у меня в чашке целый мир. Горячий, ароматный, с миллионом оттенков вкуса
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
