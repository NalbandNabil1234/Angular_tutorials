import { Component } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { IProduct } from '../catalog/IProducts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  detailsOfProducts : IProduct[] = []
  constructor(public cartService: CartServiceService){
    
  }

  ngOnInit(){
    this.detailsOfProducts = this.cartService.detailsOfPurchasedProduct
  }
  
}
