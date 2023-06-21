import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shoppingCart: Product[] = [];
  totalPrice = 0;
  products: Product[] = [];
  limit = 9;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.loadPageContent();
  }

  loadPageContent(): void {
    this.productService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data) => {
        this.products = data;
      });
  }

  nextPage(): void {
    this.offset += this.limit;
    this.loadPageContent();
  }

  prevPage(): void {
    this.offset -= this.limit;
    if (this.offset < 0) {
      this.offset = 0;
    }
    this.loadPageContent();
  }

  onAddedProduct(product: Product): void {
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotalPrice();
  }
}
