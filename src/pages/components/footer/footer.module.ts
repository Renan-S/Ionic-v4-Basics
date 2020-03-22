import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterPageRoutingModule } from './footer-routing.module';

import { FooterPage } from './footer.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterPageRoutingModule,
    BackButtonModule

  ],
  declarations: [FooterPage]
})
export class FooterPageModule {}
