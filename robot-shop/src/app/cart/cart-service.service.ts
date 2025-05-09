import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/IProducts.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: string[] = []
  detailsOfPurchasedProduct: IProduct[] = []
  prices:number[] = []
  total:number = 0
  constructor(private pushData: HttpClient) {
    
   }

   add(product: IProduct){
    // 
    // console.log(`${product.name} added to Cart`)
    this.cart.push(product.name)
    this.pushData.post('http://localhost:3000/cart', product).subscribe(() => {
      console.log('product added')
    })

    if(product.discount > 0){
    this.prices.push(Number(((product.price) * (1-product.discount)).toFixed(2)))
    } else{
    this.prices.push(product.price)
    }
    this.detailsOfPurchasedProduct.push(product)
    // console.log(this.detailsOfPurchasedProduct)

    this.calculateTotal()
  
  }

  calculateTotal(){
    this.total = this.prices.reduce((prevVal, currVal) => {
      return prevVal + currVal
    }, 0)
    // console.log(this.cart)
  }
}
