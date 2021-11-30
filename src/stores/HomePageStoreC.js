import { makeAutoObservable, action } from "mobx";
import {
  HomeWolfCardsC,
  MemesCardsC,
  OrigC,
  QuotesC,
  BasketC,
} from "../Components";

export class HomePageStoreC {
  count = 0;
  basketCount = 0;
  data = [];
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
            <div style={{ color: "white" }}>
              <h3>
                Когда очень хочется пиццы, то ее прекрасный образ начинает
                неумолимо преследовать тебя, пока ты ждешь, когда в дверь
                позвонит долгожданный курьер. От нетерпения смотришь в окно,
                видишь луну, и она кажется тебе не холодной луной, а горячей
                пиццей!
              </h3>{" "}
            </div>
            <MemesCardsC
              addToBasket={(item) => {
                this.inc(item);
              }}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <div style={{ color: "white" }}>
              <h3>
                Однажды я забежал в японский ресторан, чтобы переждать проливной
                дождь. Но, видимо, вымок так сильно, что меня снова потянуло на
                воду и морепродукты. Вот так я и оказался любителем суши.
              </h3>{" "}
            </div>
            <QuotesC
              addToBasket={(item) => {
                this.inc(item);
              }}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <div style={{ color: "white" }}>
              <h3>
              Кофе — это не просто напиток, это — религия. Не знаю, как у Вас, а у меня в чашке целый мир. Горячий, ароматный, с миллионом оттенков вкуса
              </h3>{" "}
            </div>
            <OrigC
              addToBasket={(item) => {
                this.inc(item);
              }}
            />
          </div>
        );
      default:
        return (
          <BasketC
            basketData={this.data}
            delFromBasket={(index) => {
              this.dec(index);
            }}
          />
        );
    }
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
