import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgesChipsPageRoutingModule } from './badges-chips-routing.module';

import { BadgesChipsPage } from './badges-chips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgesChipsPageRoutingModule
  ],
  declarations: [BadgesChipsPage]
})
export class BadgesChipsPageModule {}
