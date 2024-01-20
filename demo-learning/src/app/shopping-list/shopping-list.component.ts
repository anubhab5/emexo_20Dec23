import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Product } from '../product';
import { ShoppingList } from '../shopping-list';

@Component({
  selector: 'ss-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  shoppingList: ShoppingList[] = [];

  constructor(private shoppingSvc: ShoppingListService) {}

  ngOnInit() {
    this.shoppingList = this.shoppingSvc
      .getShoppingList()
      .filter((item: ShoppingList, index: number) => {
        return this.shoppingSvc.getShoppingList().indexOf(item) === index;
      });
  }

  getTotalAmount(item: ShoppingList) {
    return Number(item.productPrice) * item.quantityAdded;
  }
}
