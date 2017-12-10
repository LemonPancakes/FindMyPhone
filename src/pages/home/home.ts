import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clicked: boolean;

  constructor(public navCtrl: NavController) {
    this.clicked = false;
  }

  find() {
    this.clicked = !this.clicked;
  }

}
