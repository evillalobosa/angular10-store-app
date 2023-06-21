import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalPrice = 0;
  shoppingCartItems = 0;

  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.storeService.cart$.subscribe((products) => {
      this.shoppingCartItems = products.length;
      this.totalPrice = this.storeService.getTotalPrice();
    });

    this.productsService.getAllCategories().subscribe((data) => {
      this.categories = data.slice(0, 4);
    });
  }

  onClick(): void {
    console.log('TODO: Mostrar carrito con los items');
  }
}
