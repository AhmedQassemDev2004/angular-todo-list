import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'items-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-filter.component.html',
  styleUrl: './items-filter.component.css'
})
export class ItemsFilterComponent implements OnInit {
  @Input() filters:string[] = [];
  @Output() changeFilter = new EventEmitter<string>();
  
  currentFilter:string="";
  
  ngOnInit(): void {
    this.currentFilter = this.filters[0];
  }  
  
  setCurrentFilter(value:string) {
    this.currentFilter = value;
    this.changeFilter.emit(value);
  }
}
