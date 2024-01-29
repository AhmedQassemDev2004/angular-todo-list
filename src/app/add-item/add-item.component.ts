import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  @Output() addItem = new EventEmitter<TodoItem>();
  newTodoContent:string="";
  
  addTodo() {
    this.addItem.emit(new TodoItem(this.newTodoContent));
    this.newTodoContent = ''
  }
}
