import { Product } from './product';

export class ShoppingList extends Product {
  quantityAdded: number = 0;
  totalPrice: number = 0;
}
