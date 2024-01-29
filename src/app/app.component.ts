import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { AddItemComponent } from "./add-item/add-item.component";
import { ItemsFilterComponent } from "./items-filter/items-filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, CommonModule, ItemsListComponent, AddItemComponent, ItemsFilterComponent]
})
export class AppComponent {
  title = 'todoList';
  items: TodoItem[] = [
    new TodoItem("Go to gym"),
    new TodoItem("Finish angular course",true),
    new TodoItem("Finish unit testing course"),
  ];
  
  filters:string[] = ["All","Checked","UnChecked"]
  currentFilter:string="All"
  
  get filteredItems(): TodoItem[] {
    if(this.currentFilter=="All"){
      return this.items;
    } else if (this.currentFilter=="Checked") {
      return this.items.filter(i=>i.checked);
    } else {
      return this.items.filter(i=>!i.checked);
    }
    
  }
  
  setCurrentFilter(filter:string){
    this.currentFilter=filter;
  }
  
}
