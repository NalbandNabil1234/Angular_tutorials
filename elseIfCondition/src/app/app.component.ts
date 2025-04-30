import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elseIfCondition';
  color = 1;

  changeColor(colorCode:number){
    this.color = colorCode
  }

  displayColorOnValueChange(colorCode:Event){
    if((colorCode.target as HTMLInputElement).value === ''){
      this.color = 1
    } else{
      this.color = parseInt((colorCode.target as HTMLInputElement).value)
    }
  }
}
