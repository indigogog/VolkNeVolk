import { React, useState, useContext } from "react";
import { HomeWolfCardsC, MemesCardsC, BasketC, NavC } from ".";
import { observer } from "mobx-react";
import { StoreContext } from "../index";

export const HomePageC = observer(function HomePageC() {
  const mainstore = useContext(StoreContext);

  const [count, setcount] = useState(0);

  const change_count = (n) => {
    setcount(n);
  };

  const drow = () => {
    switch (count) {
      case 0:
        return (
          <HomeWolfCardsC
            ch={(n) => {
              change_count(n);
            }}
          />
        );
      case 1:
        return (
          <div>
            <MemesCardsC n={1} />
          </div>
        );
      case 2:
        return (
          <div>
            <MemesCardsC n={2} />
          </div>
        );
      case 3:
        return (
          <div>
            <MemesCardsC n={3} />
          </div>
        );
      default:
        return <BasketC />;
    }
  };
  return (
    <div className={mainstore.count}>
      <NavC change_count={(n) => change_count(n)} />
      {drow()}
    </div>
  );
});
