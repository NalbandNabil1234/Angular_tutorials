import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './IProducts.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartServiceService } from '../cart/cart-service.service'
import { ProductService } from './product.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetailComponent, RouterLink, RouterLinkActive],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products: IProduct[] | any
  filter: string = ''
  // first way to use the service
  // private cartSvc:CartServiceService =inject(CartServiceService) 

  // 2nd way is to directly injecting it in class constructor
  constructor(private cartSvc: CartServiceService, private productService: ProductService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products

      // this activated route .snanpshot .params is one way to access the params from the url but the only issue is that it params is an observalble so it is now only done using subscribe because the snapshot is only used when we dont want to change more than one param in a component  
      // this.filter = this.route.snapshot.params['filter'] ?? ''

      // here comes the params.subscribe which can be used when there is changes in the params in a single component 
      // subscribe method (this is for accessing the path params)
      // this.route.params.subscribe((params) => {
      //   this.filter = params['filter'] ?? ''
      // })


      // subscribe method (this is for accessing the  queryParams)
      this.route.queryParams.subscribe((params) => {
        this.filter = params['filter'] ?? ''
      })

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