import { makeAutoObservable, action } from "mobx";
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
      drow: action.bound,
      inc: action.bound,
      dec: action.bound,
    });
  }


  dec(item) {
    this.basketCount--;
    this.data.splice(this.data.indexOf(item), 1);
  }

  inc(item) {
    this.basketCount++;
    this.data.push(item);
  }
}
