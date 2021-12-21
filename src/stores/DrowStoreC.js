import { makeAutoObservable, action } from "mobx";
import { HomeWolfCardsC, MemesCardsC, BasketC } from "../Components";


export class DrowStoreC {

  count = 0;
  constructor() {

    makeAutoObservable(this, {
      drow: action.bound,
      change_count: action.bound,
    });
  }
  change_count(n) {
    this.count = n;
  }

  drow(store) {
    switch (this.count) {
      case 0:
        return (
          <HomeWolfCardsC
            ch={(n) => {
              this.change_count(n);
            }}
          />
        );
      case 1:
          console.log(store.pizzastring);
        return (
          <div>
            <MemesCardsC
              n={1}
              mainstore={store}
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
              mainstore={store}
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
              mainstore={store}
              // datastore={this.cofedata}
              // mystring = {this.cofestring}
            />
          </div>
        );
      default:
        return (
          <BasketC
          //   basketData={this.data}
          //   delFromBasket={(item) => {
          //     this.dec(item);
          //   }}
          />
        );
    }
  }
}
