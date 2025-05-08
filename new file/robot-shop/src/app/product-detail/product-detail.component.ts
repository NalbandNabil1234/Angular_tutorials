import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/IProducts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 @Input() product!: IProduct
 @Output() buy = new EventEmitter()
 
 buyBtnClicked(product:IProduct){
  // console.log(`${product.name} added to cart successfully`);
  this.buy.emit()
 }
}
