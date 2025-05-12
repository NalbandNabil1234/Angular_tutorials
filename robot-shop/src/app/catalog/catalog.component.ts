import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './IProducts.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartServiceService } from '../cart/cart-service.service'
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products: IProduct[] | any
  filter: string = ''
  // first way to use the service
  // private cartSvc:CartServiceService =inject(CartServiceService) 

  // 2nd way is to directly injecting it in class constructor
  constructor(private cartSvc: CartServiceService, private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products
    })
  }

  showFilteredProducts() {
    return this.filter === '' ? this.products : this.products.filter((product?: any) => product?.category === this.filter)

  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product)

    // displaying logic are written here
    console.log(`${this.cartSvc.cart} added to Cart`)
    console.log(`total price is : ${this.cartSvc.total}`)


    // written just for converting the products details
    // console.log(JSON.stringify(this.products))


    this.router.navigate(['/cart'])

  }

}