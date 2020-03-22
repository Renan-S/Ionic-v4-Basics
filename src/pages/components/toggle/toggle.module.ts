import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TogglePageRoutingModule } from './toggle-routing.module';

import { TogglePage } from './toggle.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TogglePageRoutingModule,
    BackButtonModule
  ],
  declarations: [TogglePage]
})
export class TogglePageModule {}
