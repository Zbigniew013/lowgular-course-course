import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SingleMenuCategoriesComponent } from './single-menu-categories.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatMenuModule, CommonModule],
  declarations: [SingleMenuCategoriesComponent],
  providers: [],
  exports: [SingleMenuCategoriesComponent]
})
export class SingleMenuCategoriesComponentModule {
}
