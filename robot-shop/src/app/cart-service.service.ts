import { Injectable } from '@angular/core';
import { IProduct } from './catalog/IProducts.component';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: string[] = []
  prices:number[] = []
  total:number = 0
  constructor() {
    
   }

   add(product: IProduct){
    // 
    // console.log(`${product.name} added to Cart`)
    this.cart.push(product.name)

    if(product.discount > 0){
    this.prices.push(Number(((product.price) * (1-product.discount)).toFixed(2)))
    } else{
    this.prices.push(product.price)
    }
  
    this.total = this.prices.reduce((prevVal, currVal) => {
      return prevVal + currVal
    }, 0)

  }
}
