import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Product Details List
  productDetails = [
    {
      productId: 1,
      productName: 'IceCream',
      productPrice: '20',
      productDescription: 'This is a very tasty ice cream',
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
      productDescription: 'The breakfast starts with me!!!',
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
}
