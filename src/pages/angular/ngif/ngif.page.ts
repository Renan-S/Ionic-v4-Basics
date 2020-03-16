import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.page.html',
  styleUrls: ['./ngif.page.scss'],
})
export class NgifPage implements OnInit {
  public logged: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
