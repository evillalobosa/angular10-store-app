import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // MAX: 5
  tags: string[] = ['ropa', 'living', 'muebles', 'comida', 'toys'];

  constructor() {}

  ngOnInit(): void {}
}
