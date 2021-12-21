import {makeAutoObservable} from 'mobx';
import data from './Jsons/firstdata.json';



export class HomeWolfCardsStore{

    dats = data;    
    constructor() {

          makeAutoObservable(this);
    }
}