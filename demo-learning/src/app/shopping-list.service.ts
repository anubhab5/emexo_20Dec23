import { Injectable } from '@angular/core';
import { Product } from './card/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingList: Product[] = [];

  constructor() {}

  getShoppingList() {
    return this.shoppingList;
  }

  addToShoppingList(item: Product) {
    this.shoppingList.push(item);
  }
}
