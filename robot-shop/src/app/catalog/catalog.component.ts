import { Component } from '@angular/core';
import { IProduct } from './IProducts.component';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  product: IProduct;
  constructor(){
    this.product = {
      id: 2,
      description: 'A friendly robot head with two eyes and a smile -- great for domestic use.',
      name: 'friendly bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2
    }
  }
}
