import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { SingleListNamesComponent } from './ui/single-list-names/single-list-names.component';
import { ListSingleChipsCryptoComponent } from './ui/list-single-chips-crypto/list-single-chips-crypto.component';
import { SingleCheckboxCategoriesComponent } from './ui/single-checkbox-categories/single-checkbox-categories.component';
import { SingleMenuCategoriesComponent } from './ui/single-menu-categories/single-menu-categories.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { SingleListNamesComponentModule } from './ui/single-list-names/single-list-names.component-module';
import { ListSingleChipsCryptoComponentModule } from './ui/list-single-chips-crypto/list-single-chips-crypto.component-module';
import { SingleCheckboxCategoriesComponentModule } from './ui/single-checkbox-categories/single-checkbox-categories.component-module';
import { SingleMenuCategoriesComponentModule } from './ui/single-menu-categories/single-menu-categories.component-module';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'list-1-single-list-names', component: SingleListNamesComponent },
  { path: 'crypto', component: ListSingleChipsCryptoComponent },
  { path: 'checkbox-categories', component: SingleCheckboxCategoriesComponent },
  { path: 'categories-menu', component: SingleMenuCategoriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductListComponentModule,
    SingleListNamesComponentModule,
    ListSingleChipsCryptoComponentModule,
    SingleCheckboxCategoriesComponentModule,
    SingleMenuCategoriesComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
