import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:any = ''

  // getInputValue 
  getInputValue(event:Event){
    console.log((event.target as HTMLInputElement).value)
  }

  // setInputValue
  setInputValue(value:string){
    this.name = value
  }

  email:any = ''

  getEmail(val:string){
    console.log(val)
  }

  displayEmail(val:string){
    this.email = val
    console.log(val)
  }

}
