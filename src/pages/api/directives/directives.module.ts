import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectivesPageRoutingModule } from './directives-routing.module';

import { DirectivesPage } from './directives.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesPageRoutingModule,
    BackButtonModule
  ],
  declarations: [DirectivesPage]
})
export class DirectivesPageModule {}
