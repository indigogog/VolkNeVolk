import { React, Component } from "react";
import { NavC } from "./index";
import { DrowStoreC, HomePageStoreC } from "../stores";
import { observer } from "mobx-react";

const drowstore = new DrowStoreC();
const mainstore = new HomePageStoreC();

export const HomePageC = observer(
  class HomePageC extends Component {
    render() {
      return (
        <div className={drowstore.count}>
          <NavC homestore={drowstore}
            mainstore = {mainstore}
           />
          {drowstore.drow(mainstore)}
        </div>
      );
    }
  }
);
