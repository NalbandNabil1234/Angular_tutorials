import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/IProducts.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: string[] = []
  detailsOfPurchasedProduct: IProduct[] = []
  prices:number[] = []
  total:number = 0
  constructor(private pushData: HttpClient, private getProducts: HttpClient) {
    
   }

   add(product: IProduct){
    // 
    // console.log(`${product.name} added to Cart`)
    this.cart.push(product.name)
    this.pushData.post('http://localhost:3000/cart', product).subscribe(() => {
      console.log('product added')
    })

    this.getProd()
  }

  getProd():Observable<IProduct[]>{
    return this.getProducts.get<IProduct[]>('http://localhost:3000/cart')
  }

}
