import {makeAutoObservable,action} from 'mobx';
import data from './Jsons/quotes.json';

export class QuotesStore{
    dats = data; 
    count = 1;   
    constructor() {
        makeAutoObservable(this, {
            inc: action.bound,
        });
    }

    dec = () => this.count--;

    inc(){
        this.count++;
    }
}