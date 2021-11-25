import {React, Component} from 'react';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react';
import {runInAction } from 'mobx';


import { counterStoreClass } from '../stores';

const store = new counterStoreClass();


export const CounterClass =  observer(class CounterClass extends Component {

    componentDidMount(){
        runInAction(()=>{
            store.count = this.props.initialCount ?? 0;
        });
    }
    render() {
        return (
            <div> 
                <Button variant="primary" onClick={store.dec}>-</Button>{' '}
                <span style={{color:store.color}}> {store.count} </span>
                <Button variant="primary" onClick={store.inc}>+</Button>{' '}
            </div>
        );
    }

});

export default CounterClass; 



// import {React, Component} from 'react';
// import Button from 'react-bootstrap/Button';
// import { observer } from 'mobx-react';
// import { action, makeObservable ,observable, computed } from 'mobx';


// export const CounterClass =  observer(class CounterClass extends Component {

//     count = 0; 

//     //computed
//     get color(){
//         return this.count > 0 ? 'green' : this.count <0 ? 'red' : 'black';
//     }

//     constructor(props) {
//         super(props);
//         makeObservable(this, {
//             count: observable,
//             color: computed,
//             dec: action,
//             inc: action.bound,
            
//         });
//         this.count = this.props.initialCount ?? 0;
//     }

//     render() {
//         return (
//             <div> 
//                 <Button variant="primary" onClick={this.dec}>-</Button>{' '}
//                 <span style={{color:this.color}}> {this.count} </span>
//                 <Button variant="primary" onClick={this.inc}>+</Button>{' '}
//             </div>
//         );
//     }

//     dec = () => this.count--;

//     inc(){
//         this.count++;
//     }
// });

// export default CounterClass; 




