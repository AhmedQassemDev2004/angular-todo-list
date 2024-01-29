import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faRotateLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'items-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent{
  @Input()
  items:TodoItem[]=[];
  
  // Icons
  faCheck=faCheck;
  faRotateLeft = faRotateLeft
  
  checkTodo(item: TodoItem) {
    item.checked=!item.checked;
    console.log(this.items);
  }
  
}
