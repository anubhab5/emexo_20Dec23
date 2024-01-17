import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'ss-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {
  constructor(private shoppingListSvc: ShoppingListService) {
    /** */
  }

  getShoppingList() {
    return this.shoppingListSvc.getShoppingList().length;
  }
}
