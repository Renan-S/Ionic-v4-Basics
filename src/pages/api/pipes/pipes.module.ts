import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipesPageRoutingModule } from './pipes-routing.module';

import { PipesPage } from './pipes.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesPageRoutingModule,
    BackButtonModule
  ],
  declarations: [PipesPage]
})
export class PipesPageModule {}
