import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck,faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoList';
  items: TodoItem[] = [
    new TodoItem("Go to gym"),
    new TodoItem("Finish angular course",true),
    new TodoItem("Finish unit testing course"),
  ];
  newTodoContent:string="";
  filters:string[]=["All","Checked","Un Checked"];
  currentFilter:string=this.filters[0];
  
  // Icons
  faCheck=faCheck;
  faRotateLeft = faRotateLeft
  
  get filteredItems(): TodoItem[] {
    if(this.currentFilter=="All"){
      return this.items;
    } else if (this.currentFilter=="Checked") {
      return this.items.filter(i=>i.checked);
    } else {
      return this.items.filter(i=>!i.checked);
    }
  }
  
  addNewItem() {
    this.items.push(new TodoItem(this.newTodoContent));
    this.newTodoContent="";
  }
  
  checkTodo(item: TodoItem) {
    item.checked=!item.checked;
    console.log(this.items);
  }
  
  setCurrentFilter(filter:string){
    this.currentFilter=filter;
  }
  
}
