import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  product: product = {
    image: '',
    name: '',
    price: 0,
    category: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
