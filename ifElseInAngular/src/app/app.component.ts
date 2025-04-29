import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifElseInAngular';
  display = true
  toggleStatus = true
  hide(){
    this.display = false
  }
  show(){
    this.display = true
  }

  toggle(){
    this.toggleStatus = !this.toggleStatus
  }
}
