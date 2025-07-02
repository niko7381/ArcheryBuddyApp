import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecsheetDetailsPage } from './specsheet-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsheetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsheetDetailsPageRoutingModule {}
