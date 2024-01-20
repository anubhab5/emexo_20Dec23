import { Injectable } from '@angular/core';
import { Product } from './product';
import { ShoppingList } from './shopping-list';

@Injectable()
export class ShoppingListService {
  private shoppingList: ShoppingList[] = [];

  constructor() {}

  getShoppingList() {
    return this.shoppingList;
  }

  addToShoppingList(item: ShoppingList) {
    debugger;
    if (Number(item.quantityAvailable) > 0) {
      this.shoppingList.push(item);
      item.quantityAvailable = Number(item.quantityAvailable) - 1 + '';
      if (!item.quantityAdded) {
        item.quantityAdded = 1;
      } else {
        item.quantityAdded++;
      }
    }
  }
}
