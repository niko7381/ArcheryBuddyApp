import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecsheetSelecttypePageRoutingModule } from './specsheet-selecttype-routing.module';

import { SpecsheetSelecttypePage } from './specsheet-selecttype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecsheetSelecttypePageRoutingModule
  ],
  declarations: [SpecsheetSelecttypePage]
})
export class SpecsheetSelecttypePageModule {}
