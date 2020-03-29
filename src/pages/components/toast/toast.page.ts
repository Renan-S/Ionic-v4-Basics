import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'This is a toast',
      position: 'top',
      cssClass: 'my-toast',
      buttons: [
        {
          text: 'OK',
          role: 'close',
          handler: () => console.log("OK clicked"),
        }
      ]
    })

    await toast.present()

    setTimeout (() => toast.message = '3 seconds has passed', 3000)

    toast.onWillDismiss().then(() => console.log("Being closed"))
    toast.onDidDismiss().then(() => console.log("Was closed"))
  }
}
