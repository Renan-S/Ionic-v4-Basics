import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetOptions } from '@ionic/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {

  }

  async presentAction() {
    //Creating the options without nesting helps to create customized callbacks
    let actionSheetOpts: ActionSheetOptions = {
      header: "Options",
      subHeader: "User options",
      buttons: [
        {
          text: 'Destroy',
          icon: 'trash',
          role: 'destructive'
        },
        {
          text: 'Cancel', 
          role:'cancel'
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {console.log("Clicked on edit")}
        }
      ],
      backdropDismiss: false //Wont close the sheet when clicked outside
    }

    actionSheetOpts.buttons = [...actionSheetOpts.buttons, {
      text: "Share",
      icon: 'share',
      handler: () => {
        console.log("Shared");
        return false; //This is so the sheet doens't close automatically
      }
    }] //Spread operator. All the buttons already made being concatenated with the new button
    
   const actionSheet = await this.actionSheetCtrl.create(actionSheetOpts)
    
   await actionSheet.present() //In Ionic 3 the Action doesn't need to be async

   setTimeout(() => actionSheet.dismiss(), 3500) //3.5 seconds to close
  }
}
