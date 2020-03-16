import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.page.html',
  styleUrls: ['./biding.page.scss'],
})
export class BidingPage implements OnInit {
  public value: number = 10;
  public secondValue: number = 12;
  public name: string = "Renan"

  constructor() { }

  ngOnInit() {
  }

  sum = () => this.value + this.secondValue
}
