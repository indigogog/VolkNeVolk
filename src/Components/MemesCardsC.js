import { React,  useContext  } from "react";
import { Row, CardGroup } from "react-bootstrap";
import { observer } from "mobx-react";
import "./styles/But.css";
import { CardsC } from "./CardsC";
import { StoreContext } from '../index'



export const MemesCardsC = observer(
  function MemesCardsC(props) {
    const store = useContext(StoreContext);
   const drowString=()=>{
    
      switch (props.n) {
        case 1:
          return store.homePage.pizastring;
        case 2:
          return store.homePage.sushistring;
        case 3:
          return store.homePage.cofestring;
        default:
          break;
      }
    }
   const drowCadrds=()=>{
      switch (props.n) {
        case 1:
          return store.homePage.pizzadata.map((item) => {
            return (
              <CardsC
                dtem={item}
                Add={(item) => {
                  store.homePage.inc(item);
                }}
                key={item.key}
              />
            );
          });
        case 2:
          return store.homePage.sushidata.map((item) => {
            return (
              <CardsC
                dtem={item}
                Add={(item) => {
                  store.homePage.inc(item);
                }}
                key={item.key}
              />
            );
          });
        case 3:
          return store.homePage.cofedata.map((item) => {
            return (
              <CardsC
                dtem={item}
                Add={(item) => {
                  store.homePage.inc(item);
                }}
                key={item.key}
              />
            );
          });
        default:
          break;
      }
    }
    
      return (
        <div className="start">
          <div style={{ color: "white" }}>
            <h3>
            {console.log("thth",store)}
              {drowString()}
            </h3>{" "}
          </div>
          <div className="test">
            <CardGroup className="group">
              <Row xs={1} md={1} lg={2} xl={3} xxl={3}>
              {drowCadrds()}
              </Row>
            </CardGroup>
          </div>
        </div>
      );
    
  }
);
