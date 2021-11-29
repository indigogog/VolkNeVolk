import { React, Component } from "react";
import { NavC} from "./index";
import {HomePageStoreC} from "../stores";
import { observer } from "mobx-react";




const store = new HomePageStoreC();

export const HomePageC = observer(
 class HomePageC extends Component {
  render() {
    return (<div className={store.count}>
    <NavC homestore={store}/>
    {store.drow()}</div>);
  }
});


// import { React, Component } from "react";
// import { BasketStore } from "../stores";
// import {
//   HomeWolfCardsC,
//   MemesCardsC,
//   OrigC,
//   QuotesC,
//   BasketC,
// } from "../Components";

// const store = new BasketStore();

// export class HomePageC extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.drow = this.drow.bind(this);
//     this.ChangeCount=this.ChangeCount.bind(this);
//   }
//   ChangeCount(n){
//       this.setState({
//           count: n,
//       });
//   }
//   drow() {
//     switch (this.state.count) {
//       case 0:
//         return (
//           <div>
//             <HomeWolfCardsC ch={(n)=>this.ChangeCount(n)}/>
//           </div>
//         );
//       case 1:
//         return (
//           <div>
//             <MemesCardsC butstore={store}  />
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <OrigC butstore={store} />
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <QuotesC butstore={store} />
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <BasketC butstore={store} />
//           </div>
//         );
//     }
//   }
//   render() {
//     return <div>{this.drow()}</div>;
//   }
// }
