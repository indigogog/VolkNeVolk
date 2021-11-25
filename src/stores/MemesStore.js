import {makeAutoObservable,action} from 'mobx';
import data from './Jsons/Memes.json';

export class MemesStore{
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