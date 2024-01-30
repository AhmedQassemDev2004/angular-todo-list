import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../shared/models/todoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) { }
  
  create(todo: TodoItem) {
    return this.http.post("http://localhost:3000/items",todo);
  }
  
  getAll(){
    return this.http.get("http://localhost:3000/items"); 
  }
  
  check(item:TodoItem) {
    item.checked = !item.checked;
    return this.http.put("http://localhost:3000/items/"+item.id,item)
  }
  
  delete(item: TodoItem) {
    return this.http.delete("http://localhost:3000/items/"+item.id);
  }
}
