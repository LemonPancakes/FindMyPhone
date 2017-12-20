import {Component} from '@angular/core';
import {LoadingController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clicked: boolean;
  searching: boolean;
  test: boolean;

  constructor(public loadingCtrl: LoadingController) {
    this.reset();
  }

  reset() {
    this.clicked = false;
    this.searching = false;
  }

  find() {
    this.searching = true;
    this.clicked = true;
    setTimeout(() => {
      this.searching = false;
    }, 2000);
  }

}
