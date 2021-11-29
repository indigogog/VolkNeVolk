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
        <div>
          <div className="test">
            <CardGroup>
              <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
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
