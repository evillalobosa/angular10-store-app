import { Component } from '@angular/core';
import { Product } from './interfaces/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'MiTienda';
  searchProduct: string = '';

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
}
