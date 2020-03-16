import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgclassPage } from './ngclass.page';

const routes: Routes = [
  {
    path: '',
    component: NgclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgclassPageRoutingModule {}
