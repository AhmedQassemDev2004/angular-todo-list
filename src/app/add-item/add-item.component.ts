import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'add-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
  providers:[TodoService]
})
export class AddItemComponent {
  @Output() addItem = new EventEmitter<TodoItem>();
  newTodoContent:string="";
  
  constructor(private todoService:TodoService){}
  
  addTodo() {
    let todo = new TodoItem(this.newTodoContent);
    this.addItem.emit(todo);
    this.newTodoContent = ''
    
    this.todoService.create(todo).subscribe(data=>{
      console.log(data);
    });
  }
}
