import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidingPageRoutingModule } from './biding-routing.module';

import { BidingPage } from './biding.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidingPageRoutingModule,
    BackButtonModule
  ],
  declarations: [BidingPage]
})
export class BidingPageModule {}
