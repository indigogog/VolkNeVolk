import {makeAutoObservable,action} from 'mobx';
import data from './Jsons/original.json';

export class OrigStore{
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