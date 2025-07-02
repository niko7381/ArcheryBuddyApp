import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecsheetCreatePage } from './specsheet-create.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsheetCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsheetCreatePageRoutingModule {}
