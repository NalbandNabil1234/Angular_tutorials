import { Component, Input } from '@angular/core';
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
}
