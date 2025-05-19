import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() names : string = ""
  @Output() message = new EventEmitter() 

  surname:string = "Nalband"
  sendMsg(){
    this.message.emit('hi this is nabil')
  }

  
}
