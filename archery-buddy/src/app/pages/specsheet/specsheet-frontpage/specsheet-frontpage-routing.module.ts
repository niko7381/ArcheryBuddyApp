import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecsheetFrontpagePage } from './specsheet-frontpage.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsheetFrontpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsheetFrontpagePageRoutingModule {}
