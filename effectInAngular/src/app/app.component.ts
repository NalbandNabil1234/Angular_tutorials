import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'effectInAngular';

  num = signal(0)
  showDiv = false
  constructor(){
    effect(() => {
      if(this.num() == 2){
        console.log(this.num())
      } else{
        console.log('sorry cant show')
      }
    })

    effect(() => {
      if(this.num() == 2){
        this.showDiv = true
      } else{
        this.showDiv = false
      }
    })
  }

  updateNum(){
    this.num.set(this.num() + 1)
  }
}
