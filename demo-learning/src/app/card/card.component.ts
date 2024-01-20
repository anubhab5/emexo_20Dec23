import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  product: Product;

  // Create a property and decorate with @Output
  // Assign a EventEmitter object to it
  @Output()
  addToCartEvent = new EventEmitter();

  constructor() {
    this.product = new Product();
  }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

  isBtnDisabled() {
    if (Number(this.product.quantityAvailable) === 0) {
      return true;
    }
    return false;
  }
}
