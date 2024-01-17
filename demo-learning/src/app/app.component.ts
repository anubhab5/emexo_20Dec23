import { Component } from '@angular/core';
import { Product } from './card/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  todayDate = new Date();

  // productService = new MyServiceService('kd', 0);

  constructor() {}

  addToCartFn(data: Product) {
    console.log('In the parent component', data);
  }
}
