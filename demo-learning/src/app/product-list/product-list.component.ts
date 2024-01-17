import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../card/product';
import { ShoppingListService } from '../shopping-list.service';

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

  addToCartFn(product: Product) {
    this.shoppingListSvc.addToShoppingList(product);
  }
}
