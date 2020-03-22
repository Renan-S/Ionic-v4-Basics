import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerPageRoutingModule } from './spinner-routing.module';

import { SpinnerPage } from './spinner.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerPageRoutingModule,
    BackButtonModule
  ],
  declarations: [SpinnerPage]
})
export class SpinnerPageModule {}
