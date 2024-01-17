import { Component } from '@angular/core';
import { Product } from './card/product';
import { MyServiceService } from './my-service.service';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  todayDate = new Date();

  // productService = new MyServiceService('kd', 0);

  constructor(
    private productService: MyServiceService,
    private demoSvc: DemoServiceService
  ) {}

  // Product Details List
  productDetails = [
    {
      productId: 1,
      productName: 'IceCream',
      productPrice: '20',
      productDescription: 'This is a very nice!',
      quantityAvailable: '10',
      isVeg: false,
    },
    {
      productId: 2,
      productName: 'Cake',
      productPrice: '55',
      productDescription: 'The best cake in town',
      quantityAvailable: '2',
      isVeg: false,
    },
    {
      productId: 3,
      productName: 'Milk',
      productPrice: '5',
      productDescription: 'Milk gives us strength',
      quantityAvailable: '12',
      isVeg: true,
    },
    {
      productId: 4,
      productName: 'Chocolate',
      productPrice: '12',
      productDescription: 'The only mood elevator :)',
      quantityAvailable: '10',
      isVeg: true,
    },
    {
      productId: 5,
      productName: 'Corn Flakes',
      productPrice: '22',
      productDescription: 'Breakfast starts with me!!!',
      quantityAvailable: '1',
      isVeg: true,
    },
    {
      productId: 6,
      productName: 'Biscuit',
      productPrice: '2',
      productDescription: 'Any time, every time.',
      quantityAvailable: '1',
      isVeg: false,
    },
  ];

  addToCartFn(data: Product) {
    console.log('In the parent component', data);

    this.productService.getProducts();

    this.demoSvc.add();
  }
}
