import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  public day: number = Math.floor(Math.random()*30);
  public month: number = Math.floor(Math.random()*12);



  constructor() { }

  ngOnInit() {
  }

}
