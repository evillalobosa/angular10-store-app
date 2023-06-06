import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    image: '',
    name: '',
    price: 0,
    category: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
