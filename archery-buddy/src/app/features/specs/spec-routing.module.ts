import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecsheetCreatePage } from './pages/specsheet-create/specsheet-create.page';
import { SpecsheetDetailsPage } from './pages/specsheet-details/specsheet-details.page';
import { SpecsheetFrontpagePage } from './pages/specsheet-frontpage/specsheet-frontpage.page';
import { SpecsheetSelecttypePage } from './pages/specsheet-selecttype/specsheet-selecttype.page';

const routes: Routes = [
  { path: 'spec-create', component: SpecsheetCreatePage },
  { path: 'spec-details', component: SpecsheetDetailsPage },
  { path: 'spec-frontpage', component: SpecsheetFrontpagePage },
  { path: 'spec-select', component: SpecsheetSelecttypePage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SpecRoutingModule {}
