import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ListService extends Service {

    @tracked itemList = [];
    addItem(item) {
        this.itemList = [...this.itemList, item];
        console.log(this.itemList)
    }
    removeItem(itemName) {
        this.itemList = this.itemList.filter((item) => item !== itemName)
    }

}