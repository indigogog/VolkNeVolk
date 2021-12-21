import { makeAutoObservable } from "mobx";
import { HomePageStoreC, HomeWolfCardsStore} from ".";

const homePageStoreC = new HomePageStoreC();
const homeWolfCardsStore = new HomeWolfCardsStore();


class RootStore{
    homePage = homePageStoreC;
    homeWolf = homeWolfCardsStore ;


    constructor(){
        makeAutoObservable(this);
    }
}


const storeInstance = new RootStore();

export default storeInstance;
