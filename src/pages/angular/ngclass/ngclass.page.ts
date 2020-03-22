import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.page.html',
  styleUrls: ['./ngclass.page.scss'],
})
export class NgclassPage implements OnInit {
  public css : string = '';
  public condition : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
