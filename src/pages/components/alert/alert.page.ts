import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  basicAlertOpts: AlertOptions = {
    header: "Welcome!",
    subHeader: "Hope you like it!",
    message: "Made with Ionic version 5.x",
    buttons: [{
      role: 'cancel',
      text: "OK",
      handler: () => {console.log("Clicked on OK")}
    }],
    backdropDismiss: false
  }

  promptAlertOpts: AlertOptions = {
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Give me a name',
        label: 'Name'
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Give me a password'
      },
      {
        name: 'email',
        type: 'email',
        min: 10,
        placeholder: 'Give me a email'
      }
    ],
    header: 'Tell me your name',
    buttons: [{
      text: 'Confirm',
      handler: data => {
        console.log(data);
        console.log(data.name, data.password, data.email);
        return false}
    }]
  }

  confirmAlertOpts: AlertOptions = {
    header: 'Do you really want to leave?',
    subHeader: 'You will lose all information',
    buttons: [
      {
        text: 'Yeap',
        handler: () => {
          this.navCtrl.pop()
        }
      },
      {
      text: 'Nope',
      role: 'cancel'
      }
    ]

  }

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async showBasicAlert() {
    const basicAlert = await this.alertController.create(this.basicAlertOpts)
    await basicAlert.present()
  }

  async showPromptAlert() {
    const promptAlert = await this.alertController.create(this.promptAlertOpts)
    await promptAlert.present()
  }

  async showConfirmAlert() {
    const confirmAlert = await this.alertController.create(this.confirmAlertOpts)
    await confirmAlert.present()
  }

  async showRadioAlert() {
    const radioAlert = await this.alertController.create({
      header: 'Choose your destiny',
      inputs: [
      {
        checked: true,
        label: 'Flawless Victory',
        type: 'radio',
        value: 'Flawless Victory'
      },
      {
        label: 'Friendship',
        type: 'radio',
        value: 'Friendship'
      }
    ],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    })
    await radioAlert.present()
  }

  async showCheckAlert() {
    const checkAlert = await this.alertController.create({
      header: 'Which did you play?',
      inputs: [
      {
        label: 'Zelda',
        type: 'checkbox',
        value: 'zelda'
      },
      {
        label: 'Mortal Kombat',
        type: 'checkbox',
        value: 'mortalKombat'
      }
    ],
      buttons: [
        {
          text: 'Ok',
          cssClass: 'success',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'warning'
        },
      ],
    })
    await checkAlert.present()
  }

}
