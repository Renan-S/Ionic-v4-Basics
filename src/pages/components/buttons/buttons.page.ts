import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtrl.back()
  }

}
