import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgforPageRoutingModule } from './ngfor-routing.module';

import { NgforPage } from './ngfor.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgforPageRoutingModule,
    BackButtonModule
  ],
  declarations: [NgforPage]
})
export class NgforPageModule {}
