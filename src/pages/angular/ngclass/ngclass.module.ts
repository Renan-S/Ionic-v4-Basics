import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgclassPageRoutingModule } from './ngclass-routing.module';

import { NgclassPage } from './ngclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgclassPageRoutingModule
  ],
  declarations: [NgclassPage]
})
export class NgclassPageModule {}
