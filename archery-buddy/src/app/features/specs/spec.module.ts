import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecsheetCreatePage } from './pages/specsheet-create/specsheet-create.page';
import { SpecsheetDetailsPage } from './pages/specsheet-details/specsheet-details.page';
import { SpecsheetFrontpagePage } from './pages/specsheet-frontpage/specsheet-frontpage.page';
import { SpecsheetSelecttypePage } from './pages/specsheet-selecttype/specsheet-selecttype.page';

@NgModule({
  declarations: [
    SpecsheetCreatePage,
    SpecsheetDetailsPage,
    SpecsheetFrontpagePage,
    SpecsheetSelecttypePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})

export class SpecPageModule {}
