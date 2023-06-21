import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURL = 'https://young-sands-07814.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getAllProducts(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiURL}/products`, {
      params: { limit: `${limit}`, offset: `${offset}` },
    });
  }

  getOneProduct(id: number) {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.apiURL}/categories`);
  }
}
