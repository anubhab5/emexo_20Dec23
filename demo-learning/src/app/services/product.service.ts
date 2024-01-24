import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //
  constructor(private http: HttpClient, private router: Router) {}

  // Return product List
  getProducts() {
    this.checkIfTokenExists();
    const token = sessionStorage.getItem('token')?.toString() || '';
    const headers = new HttpHeaders().set('authorization', token);
    return this.http.get('http://localhost:3000/products', {
      headers: headers,
    });
  }

  getProductById(id: number) {
    this.checkIfTokenExists();
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  addNewProduct(product: Product) {
    this.checkIfTokenExists();
    const token = sessionStorage.getItem('token')?.toString() || '';
    const headers = new HttpHeaders().set('authorization', token);
    return this.http.post('http://localhost:3000/products', product, {
      headers: headers,
    });
  }

  private checkIfTokenExists() {
    const token = sessionStorage.getItem('token')?.toString() || '';
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
