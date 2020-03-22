import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgclassPageRoutingModule } from './ngclass-routing.module';

import { NgclassPage } from './ngclass.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgclassPageRoutingModule,
    BackButtonModule
  ],
  declarations: [NgclassPage]
})
export class NgclassPageModule {}
