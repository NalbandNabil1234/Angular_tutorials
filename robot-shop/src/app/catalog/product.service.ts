import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './IProducts.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constantRoute = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
   return this.http.get<IProduct[]>( this.constantRoute + 'products');
  }
}
