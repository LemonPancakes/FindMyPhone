import {Component} from '@angular/core';
import {LoadingController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clicked: boolean;

  constructor(public loadingCtrl: LoadingController) {
    this.clicked = false;
  }

  reset() {
    this.clicked = false;
  }

  find() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Locating...',
      duration: 2000
    });

    loading.present();
    loading.setCssClass('loading-dialog');

    loading.onDidDismiss(() => {
      this.clicked = true;
    });
  }

}
