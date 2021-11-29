import { makeAutoObservable, action } from "mobx";
import { HomeWolfCardsC, MemesCardsC, OrigC, QuotesC, BasketC} from "../Components";

export class HomePageStoreC {
  count = 0;
  basketCount = 0;
  data= [];
  constructor() {
    makeAutoObservable(this,{
       change_count: action.bound,
        drow: action.bound,  
        inc: action.bound,
        dec: action.bound,      
    });
  }
  change_count(n){
    this.count=n;
  }

  drow() {
    switch (this.count) {
      case 0:
        return (<HomeWolfCardsC ch={(n)=>{this.change_count(n)}} />);
      case 1:
        return (<MemesCardsC addToBasket={(item)=>{this.inc(item)}}/>);
      case 2:
        return (<OrigC addToBasket={(item)=>{this.inc(item)}}/>);
      case 3:
        return (<QuotesC addToBasket={(item)=>{this.inc(item)}}/>);
      default:
          return(<BasketC basketData={this.data} delFromBasket={(index)=>{this.dec(index)}}/>);
    }
  }

  dec(item){
    this.basketCount--;
    this.data.splice(this.data.indexOf(item),1);
}

inc(item){
    this.basketCount++;
    this.data.push(item);
}

  


}
