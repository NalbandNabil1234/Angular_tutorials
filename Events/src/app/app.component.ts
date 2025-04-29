import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Events';

  // click event
  btnClicked(event:MouseEvent){
    console.log("Btn Clicked");
    console.log(event.type, "Event")
    console.log((event.target as Element).className);
  }
  
  // mouseenter event
  mouseEnter(event:MouseEvent){
    console.log(event.type, "Event")
  }
  
  // mouseleave event
  mouseLeave(event:MouseEvent){
    console.log(event.type, "Event")
  }

  // input event
  showInputText(event:Event){
    console.log(event.type, "Event");
    console.log((event.target as HTMLInputElement).value); 
  }

  // focus event
  showFocusEvent(event:Event){
    console.log(event.type, "Event");
  }

  // blur event
  showBlurEvent(event:Event){
    console.log(event.type, "Event");   
  }
}


