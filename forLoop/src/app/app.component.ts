import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forLoop';
  names = ['Nabil', 'Abdullah', 'Amaan']
  studdetails = [
    {name: 'Nabil', age: '22', address: 'panvel'},
    {name: 'Saad', age: '18', address: 'pune'},
    {name: 'Ali', age: '17', address: 'mumbai'}
  ]

  showName(name:string){
    console.log(name)
  }
}
