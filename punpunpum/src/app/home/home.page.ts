import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides;
  constructor() {}
  next() {
    console.log(this.slides)
    this.slides.slideNext();
  }
  prev() {
    this.slides.slidePrev();
  }
}
