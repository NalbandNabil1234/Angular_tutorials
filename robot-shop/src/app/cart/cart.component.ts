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
  detailsOfProducts: IProduct[] = []
  prices: number[] = []
  total: number = 0

  constructor(public cartService: CartServiceService) {

  }


  ngOnInit() {
    // this.detailsOfProducts = this.cartService.detailsOfPurchasedProduct
    this.cartService.getProd().subscribe((products) => {
      this.detailsOfProducts = products
      this.prices = this.detailsOfProducts.map((product) => {
      return product.discount > 0 ? Number(((product.price) * (1 - product.discount))): product.price
      
    })
    this.calculateTotal()
    })

    
    

  }

  calculateTotal(){
    this.total = this.prices.reduce((prevVal, nextVal)=> prevVal + nextVal, 0)
  }

}
