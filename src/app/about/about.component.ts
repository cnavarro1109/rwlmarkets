import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public total: number;
  version: string = environment.version;
  constructor() {}

  ngOnInit() {
    this.total = this._calculateTotal(1, 2);

  }

  private _calculateTotal(number1: number, 
                          number2: number) {
    return (number1 + number2);
  }

  /* public calculate() {
    this.total = 9000;
  } */
}
