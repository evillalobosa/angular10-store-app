import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalPrice = 0;

  // TODO: limit to 4
  categories: string[] = ['ropa', 'living', 'muebles', 'comida', 'toys'];

  constructor(private storeService: StoreService) {
    this.totalPrice = storeService.getTotalPrice();
  }

  ngOnInit(): void {}
}
