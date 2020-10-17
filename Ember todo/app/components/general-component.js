import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GeneralComponentComponent extends Component {

    @service('list') todoservice;
    @action
    addItem() {
        let tempTodo = $('input').val();
        $('input').val('')
        this.todoservice.addItem(tempTodo);
    }



}