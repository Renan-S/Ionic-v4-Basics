import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesChipsPage } from './badges-chips.page';

const routes: Routes = [
  {
    path: '',
    component: BadgesChipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgesChipsPageRoutingModule {}
