import { observable, action } from 'mobx'; 

class TodoStore {
    @observable title = 'teste';
    
    @action changeTitle(title) {
        this.title = title
    }
}

export default new TodoStore()