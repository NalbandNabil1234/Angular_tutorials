import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'switchCase';
  color = ''

  colorChangeOnClicks(color:string){
    this.color = color
  }

  handleColorBasedOnText(text:Event){
    this.color = (text.target as HTMLInputElement).value
  }

}