import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalInAngular';
  val = signal(10)

  num = signal(20)

  // increaseNum(val){
  //   this.num = val
  // }

  increaseVal(){
    this.val.set(this.val()+1)
  }

  decreaseVal(){
    if(this.val() === 0){
      this.val.set(0)
    } else{
      this.val.set(this.val()-1)
    }
  }
 
}
