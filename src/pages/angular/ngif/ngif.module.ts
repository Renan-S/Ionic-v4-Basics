import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgifPageRoutingModule } from './ngif-routing.module';

import { NgifPage } from './ngif.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgifPageRoutingModule,
    BackButtonModule
  ],
  declarations: [NgifPage]
})
export class NgifPageModule {}
