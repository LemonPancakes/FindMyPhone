import {Component} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clicked: boolean;
  searching: boolean;
  searchingText: string;
  test: boolean;

  constructor() {
    this.reset();
    this.searchingText = "Searching.";
  }

  reset() {
    this.clicked = false;
    this.searching = false;
    this.searchingText = "Searching.";
  }

  find() {
    this.searching = true;
    this.clicked = true;

    setTimeout(() => {
      this.searchingText += '.';
    }, 1000);

    setTimeout(() => {
      this.searchingText += '.';
    }, 2000);

    setTimeout(() => {
      this.searching = false;
    }, 3000);
  }

}
