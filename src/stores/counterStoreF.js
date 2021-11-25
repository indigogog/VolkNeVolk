import { action, makeObservable ,observable, computed } from 'mobx';

export function counterStoreF(){
    return makeObservable({
        count: 0,
            get color(){
                return this.count > 0 ? 'green' : this.count <0 ? 'red' : 'black';
            },
            dec(){
                this.count--;
            },
            inc(){
                this.count++;
            },
    },{
        count: observable,
        color: computed,
        dec: action.bound,
        inc: action.bound,
    });
}