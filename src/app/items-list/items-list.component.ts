import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {EventService} from '../../shared/services/EventService';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../todo.service';

@Component({
  selector: 'items-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
  providers:[TodoService]
})
export class ItemsListComponent {
  @Input()
  items:TodoItem[]=[];
  
  // Icons
  faTrash = faTrash;
  
  constructor(private eventService:EventService, private todoService:TodoService) { }
  
  checkTodo(item: TodoItem) {
    this.todoService.check(item).subscribe(data=>{
      console.log("check=> ",data);
    });
  }
  
  removeItem(item: TodoItem) {
    this.eventService.emit("removeItem",item);
    this.todoService.delete(item).subscribe(data=>{
      console.log("delete=> ",data);
    })
  }
  
}
