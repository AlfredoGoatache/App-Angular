import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 800,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      850: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  constructor() {}

  ngOnInit(): void {}

}
