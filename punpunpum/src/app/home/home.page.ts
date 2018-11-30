import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides;
  constructor(private router: Router) {}
  //controles del slider
  next() {
    console.log(this.slides)
    this.slides.slideNext();
  }
  prev() {
    this.slides.slidePrev();
  }

  //boton de navegar
  jugar(){
    this.router.navigate(['power'])
  }
}
