import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-home',
  imports: [CatalogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = 'NabilS'
  msg: string = ''

  displayMsg(data: string){
    this.msg = data
  }
}
