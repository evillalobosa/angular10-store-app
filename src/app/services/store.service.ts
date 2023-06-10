import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  shoppingCart: Product[] = [];
  totalPrice = 0;

  constructor() {}

  getShoppingCart(): Product[] {
    return this.shoppingCart;
  }

  addProduct(product: Product): void {
    this.shoppingCart.push(product);
  }

  getTotalPrice(): number {
    return (this.totalPrice = this.shoppingCart.reduce(
      (sum, item) => sum + item.price,
      0
    ));
  }
}
