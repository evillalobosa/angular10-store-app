import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  getShoppingCart(): Product[] {
    return this.shoppingCart;
  }

  addProduct(product: Product): void {
    this.shoppingCart.push(product);
    this.cart.next(this.shoppingCart);
  }

  getTotalPrice(): number {
    // Thanks javascript..
    const price = this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
    return Number(price.toFixed(2));
  }
}
