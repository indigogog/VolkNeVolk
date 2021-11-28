import {makeAutoObservable,action} from 'mobx';


export class BasketStore{
    data = [];
    count = 0;   
    constructor() {
        makeAutoObservable(this, {
            inc: action.bound,
            dec: action.bound,
        });
    }

    dec(){
        this.count--;
    }

    inc(item){
        this.count++;
        this.data.push(item);
        console.log(this.count);
    }
}