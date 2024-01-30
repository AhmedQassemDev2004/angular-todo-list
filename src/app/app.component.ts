import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/models/todoItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { AddItemComponent } from "./add-item/add-item.component";
import { ItemsFilterComponent } from "./items-filter/items-filter.component";
import { EventService } from '../shared/services/EventService';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, CommonModule, ItemsListComponent, AddItemComponent, ItemsFilterComponent,HttpClientModule],
  providers:[EventService,TodoService]
})
export class AppComponent implements OnInit {
  title = 'todoList';
  items: TodoItem[]=[];
  
  filters:string[] = ["All","Checked","UnChecked"]
  currentFilter:string="All"
  
  constructor(private eventService:EventService,private todoService:TodoService){}
  
  ngOnInit(): void {
    // Load items
    this.todoService.getAll().subscribe((items:any)=>{
      this.items=items;
    })
    
    this.eventService.listen("removeItem",(item:TodoItem)=>{
      let index = this.items.indexOf(item);
      this.items.splice(index,1);
    })
    
  }
  
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
