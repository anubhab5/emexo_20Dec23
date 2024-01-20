import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { ShoppingListService } from '../services/shopping-list.service';
import { ShoppingList } from '../shopping-list';

@Component({
  selector: 'ss-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[];

  constructor(
    private productService: ProductService,
    private shoppingListSvc: ShoppingListService
  ) {
    this.productList = this.productService.getProducts();
  }

  addToCartFn(product: ShoppingList) {
    this.shoppingListSvc.addToShoppingList(product);
  }
}
