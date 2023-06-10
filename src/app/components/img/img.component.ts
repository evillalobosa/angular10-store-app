import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() imgSource = '';
  @Output() loaded = new EventEmitter();

  imgFallback = 'https://www.m2crowd.com/core/i/placeholder.png';
  imgWidth = '200';

  constructor() {}

  ngOnInit(): void {}

  onError(): void {
    this.imgSource = this.imgFallback;
  }

  whenLoaded(): void {
    this.loaded.emit(this.imgSource);
  }
}
