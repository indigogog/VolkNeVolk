//Перерисовывается весь компонент стор отдельно
import {React, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import { observer } from 'mobx-react';
import { counterStoreF } from "../stores";
import { runInAction } from 'mobx';


const store = counterStoreF();

export const CounterF=observer(props=> {
    useEffect(()=>{
        runInAction(()=>{
            store.count = props.initialCount ?? 0;
        });
    }, [props.initialCount]);
  return (
    <div>
      <Button variant="primary" onClick={store.dec}>
        -
      </Button>{" "}
      <span style={{color:store.color}}> {store.count} </span>
      <Button variant="primary" onClick={store.inc}>
        +
      </Button>{" "}
    </div>
  );
})



// Перерисовывается весь компонент
// import Button from "react-bootstrap/Button";
// import { observer, useLocalObservable } from 'mobx-react';
// import { action, makeObservable ,observable } from 'mobx';

// export const CounterF=observer(props=> {

//     const store = useLocalObservable(()=>{
//         return {
//             count: props.initialCount ?? 0,
//             get color(){
//                 return this.count > 0 ? 'green' : this.count <0 ? 'red' : 'black';
//             },
//             dec(){
//                 this.count--;
//             },
//             inc(){
//                 this.count++;
//             },
//         }
//     })
//   return (
//     <div>
//       <Button variant="primary" onClick={store.dec}>
//         -
//       </Button>{" "}
//       <span style={{color:store.color}}> {store.count} </span>
//       <Button variant="primary" onClick={store.inc}>
//         +
//       </Button>{" "}
//     </div>
//   );
// });

//Перерисовывается только спан

// import Button from "react-bootstrap/Button";
// import { observer, useLocalObservable, Observer } from 'mobx-react';


// export const CounterF=props=> {

//     const store = useLocalObservable(()=>{
//         return {
//             count: props.initialCount ?? 0,
//             dec(){
//                 this.count--;
//             },
//             inc(){
//                 this.count++;
//             },
//         }
//     })
//   return (
//     <div>
//       <Button variant="primary" onClick={store.dec}>
//         -
//       </Button>{" "}
//       <Observer>{()=>(
//         <span> {store.count} </span>
//       )}
//       </Observer>
//       <Button variant="primary" onClick={store.inc}>
//         +
//       </Button>{" "}
//     </div>
//   );
// };