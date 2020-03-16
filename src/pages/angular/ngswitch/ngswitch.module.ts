import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgswitchPageRoutingModule } from './ngswitch-routing.module';

import { NgswitchPage } from './ngswitch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgswitchPageRoutingModule
  ],
  declarations: [NgswitchPage]
})
export class NgswitchPageModule {}
