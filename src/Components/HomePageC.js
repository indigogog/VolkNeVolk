import { React, Component } from "react";
import { HomeWolfCardsC, MemesCardsC, BasketC,NavC } from ".";
import { HomePageStoreC } from "../stores";
import { observer } from "mobx-react";

const mainstore = new HomePageStoreC();

export const HomePageC = observer(
  class HomePageC extends Component {
    constructor(props) {
      super(props);
      this.state ={
        count: 0,
      }
      this.change_count = this.change_count.bind(this);
      this.drow = this.drow.bind(this);
    }
    change_count(n) {
      this.setState({
        count: n,
      });
    }
    drow() {
      switch (this.state.count) {
        case 0:
          return (
            <HomeWolfCardsC
              ch={(n) => {
                this.change_count(n);
              }}
            />
          );
        case 1:
          return (
            <div>
              <MemesCardsC
                n={1}
                mainstore={mainstore}
                // datastore={this.pizzadata}
                // mystring = {this.pizastring}
              />
            </div>
          );
        case 2:
          return (
            <div>
              <MemesCardsC
                n={2}
                mainstore={mainstore}
                // datastore={this.sushidata}
                // mystring = {this.sushistring}
              />
            </div>
          );
        case 3:
          return (
            <div>
              <MemesCardsC
                n={3}
                mainstore={mainstore}
                // datastore={this.cofedata}
                // mystring = {this.cofestring}
              />
            </div>
          );
        default:
          return (
            <BasketC
            mainstore={mainstore}          
            />
          );
      }
    }
    render() {
      return (
        <div className={mainstore.count}>
          <NavC
            change_count ={(n)=>this.change_count(n)}
            mainstore = {mainstore}
           />
          {this.drow()}
        </div>
      );
    }
  }
);
