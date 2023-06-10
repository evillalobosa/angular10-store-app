import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    image: '',
    name: '',
    price: 0,
    category: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addedProduct.emit(this.product);
  }
}
