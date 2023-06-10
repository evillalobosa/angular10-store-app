import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products?limit=10'
    );
  }

  getOneProduct(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  getAllCategories() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
