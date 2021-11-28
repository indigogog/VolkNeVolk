import { makeAutoObservable, action } from "mobx";
import { HomeWolfCardsC, MemesCardsC, OrigC, QuotesC, BasketC} from "../Components";
import {BasketStore} from './index'

const store = new BasketStore();

export class HomePageStoreC {
  count = 0;
  constructor() {
    makeAutoObservable(this,{
       change_count: action.bound,
        drow: action.bound,        
    });
  }
  change_count(n){
    this.count=n;
    console.log(this.count);
  }

  drow() {
    switch (this.count) {
      case 0:
        return (<HomeWolfCardsC ch={(n)=>{this.change_count(n)}} />);
      case 1:
        return (<MemesCardsC butstore={store}/>);
      case 2:
        return (<OrigC butstore={store}/>);
      case 3:
        return (<QuotesC butstore={store}/>);
      default:
          return(<BasketC butstore={store}/>);
    }
  }

  


}
