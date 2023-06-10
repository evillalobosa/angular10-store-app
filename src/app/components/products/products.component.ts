import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shoppingCart: Product[] = [];
  totalPrice = 0;
  products: Product[] = [
    {
      id: 1,
      name: 'El mejor juguete',
      price: 459,
      image:
        'https://static.platzi.com/media/user_upload/album-6f4213d5-1d2d-4e0f-96fe-edb36c3255b4.jpg',
      category: 'toys',
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      price: 888,
      image:
        'https://static.platzi.com/media/user_upload/bike-143dcfe9-3190-49fd-88f7-d3bf74182072.jpg',
    },
    {
      id: 3,
      name: 'Coleción de albumnes',
      price: 40,
      image:
        'https://static.platzi.com/media/user_upload/books-80160e05-d177-420b-89c5-01a97b2bdb76.jpg',
      category: 'music',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddedProduct(product: Product): void {
    this.shoppingCart.push(product);
    this.totalPrice = this.shoppingCart.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
}
