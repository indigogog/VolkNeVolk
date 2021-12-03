import { makeAutoObservable, action } from "mobx";
import {
  HomeWolfCardsC,
  MemesCardsC,
  BasketC,
} from "../Components";
import Pizza from "./Jsons/Memes.json";
import sushi from "./Jsons/quotes.json";
import cofe from "./Jsons/original.json";

export class HomePageStoreC {
  count = 0;
  basketCount = 0;
  data = [];
  addedInBasket = false;
  pizzadata = Pizza;
  sushidata = sushi;
  cofedata = cofe;
  pizastring =
    "Когда очень хочется пиццы, то ее прекрасный образ начинает неумолимо преследовать тебя, пока ты ждешь, когда в дверь  позвонит долгожданный курьер. От нетерпения смотришь в окно,  видишь луну, и она кажется тебе не холодной луной, а горячей  пиццей!";
  cofestring =
    "Кофе — это не просто напиток, это — религия. Не знаю, как у Вас, а у меня в чашке целый мир. Горячий, ароматный, с миллионом оттенков вкуса";
  sushistring =
    "Однажды я забежал в японский ресторан, чтобы переждать проливной дождь. Но, видимо, вымок так сильно, что меня снова потянуло на воду и морепродукты. Вот так я и оказался любителем суши.";

  constructor() {
    makeAutoObservable(this, {
      change_count: action.bound,
      drow: action.bound,
      inc: action.bound,
      dec: action.bound,
    });
  }
  change_count(n) {
    this.count = n;
  }

  drow() {
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
        return (
          <div>
            <MemesCardsC
              addToBasket={(item) => {
                this.inc(item);
              }}
              datastore={this.pizzadata}
              mystring = {this.pizastring}
            />
          </div>
        );
      case 2:
        return (
          <div>
             <MemesCardsC
              addToBasket={(item) => {
                this.inc(item);
              }}
              datastore={this.sushidata}
              mystring = {this.sushistring}
            />
          </div>
        );
      case 3:
        return (
          <div>
             <MemesCardsC
              addToBasket={(item) => {
                this.inc(item);
              }}
              datastore={this.cofedata}
              mystring = {this.suhistring}
            />
          </div>
        );
      default:
        return (
          <BasketC
            basketData={this.data}
            delFromBasket={(item) => {
              this.dec(item);
            }}
          />
        );
    }
  }
  dec(item) {
    this.basketCount--;
    console.log(item.srcImage);
    this.data.splice(this.data.indexOf(item), 1);
  }

  inc(item) {
    this.basketCount++;
    this.data.push(item);
  }
}
