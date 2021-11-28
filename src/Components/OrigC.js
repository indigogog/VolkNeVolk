import { React, Component } from "react";
import { Row, CardGroup, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { OrigStore } from "../stores";
import './styles/But.css'
import {CardsC} from './CardsC';

const store = new OrigStore();


export const OrigC = observer(
    class OrigC extends Component {
      render() {
        return (
          <div>
           <div className="bbuutt">
            <Button variant="primary" onClick={store.dec}>
              -
            </Button>{" "}
            <span style={{color:"white"}}> {store.count} </span>
            <Button variant="primary" onClick={store.inc}>
              +
            </Button>{" "}
          </div>
            <div className="test">
              <CardGroup>
                <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
                  {store.dats.map((item,index) =>{
                    if(store.count>index)
                    return(
                      <CardsC  dtem={item} butstore={this.props.butstore}/>
                  )})}
                </Row>
              </CardGroup>
            </div>
          </div>
        );
      }
    }
  );