import { v4 as uuidv4 } from 'uuid';

export class TodoItem {
    public id: string;
    
    constructor(public content: string, public checked: boolean = false) {
        this.id = uuidv4();
    }
}