import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualScrollPageRoutingModule } from './virtual-scroll-routing.module';

import { VirtualScrollPage } from './virtual-scroll.page';
import { BackButtonModule } from 'src/app/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualScrollPageRoutingModule,
    BackButtonModule
  ],
  declarations: [VirtualScrollPage]
})
export class VirtualScrollPageModule {}
