import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecsheetSelecttypePage } from './specsheet-selecttype.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsheetSelecttypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsheetSelecttypePageRoutingModule {}
