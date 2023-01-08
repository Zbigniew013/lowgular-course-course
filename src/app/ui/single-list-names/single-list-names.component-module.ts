import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SingleListNamesComponent } from './single-list-names.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, MatCardModule],
  declarations: [SingleListNamesComponent],
  providers: [],
  exports: [SingleListNamesComponent],
})
export class SingleListNamesComponentModule { }
