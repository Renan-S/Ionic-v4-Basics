import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-badges-chips',
  templateUrl: './badges-chips.page.html',
  styleUrls: ['./badges-chips.page.scss'],
})
export class BadgesChipsPage implements OnInit {

  
  public friendsNum: number = Math.floor(Math.random()*10);

  constructor() { }

  ngOnInit() {
  }
}
