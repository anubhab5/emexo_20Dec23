import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.getCurrentDate();
    }, 1000);
  }

  addToCartFn(data: Product) {
    console.log('In the parent component', data);
  }

  getCurrentDate() {
    return new Date();
  }
}
