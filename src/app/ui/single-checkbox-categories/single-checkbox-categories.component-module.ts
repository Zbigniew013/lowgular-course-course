import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { SingleCheckboxCategoriesComponent } from './single-checkbox-categories.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatCardModule],
  declarations: [SingleCheckboxCategoriesComponent],
  providers: [],
  exports: [SingleCheckboxCategoriesComponent]
})
export class SingleCheckboxCategoriesComponentModule {
}
