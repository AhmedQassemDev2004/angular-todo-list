import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'items-filter',
  standalone: true,
  imports: [],
  templateUrl: './items-filter.component.html',
  styleUrl: './items-filter.component.css'
})
export class ItemsFilterComponent {
  @Output() filter = new EventEmitter<any>();
  
  filters:string[]=["All","Checked","Un Checked"];
  
  setFilter(value:string){
    
  }
}
