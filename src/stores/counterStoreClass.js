import { action,makeAutoObservable, when,reaction } from 'mobx';

export class counterStoreClass{
    count = 0; 

    //computed
    get color(){
        return this.count > 0 ? 'green' : this.count <0 ? 'red' : 'black';
    }

    constructor() {
        // makeObservable(this, {
        //     count: observable,
        //     color: computed,
        //     dec: action,
        //     inc: action.bound,            
        // });
        makeAutoObservable(this, {
            inc: action.bound,
        });

       // autorun(()=> console.log('Count:', this.count));
        when(()=> this.count>5, ()=> console.log('ccc'));
        reaction(()=> this.count, (count, prevCount) =>{
            console.log('prevCount: ', prevCount,'count: ', count);
        })
    }

    dec = () => this.count--;

    inc(){
        this.count++;
    }
}