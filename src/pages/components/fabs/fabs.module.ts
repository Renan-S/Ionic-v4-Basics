import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabsPageRoutingModule } from './fabs-routing.module';

import { FabsPage } from './fabs.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabsPageRoutingModule,
    BackButtonModule
  ],
  declarations: [FabsPage]
})
export class FabsPageModule {}
