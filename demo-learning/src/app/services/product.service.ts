import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Return product List
  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProductById(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  addNewProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
    // this.http.delete('')
    // this.http.put('',{})
  }
}
