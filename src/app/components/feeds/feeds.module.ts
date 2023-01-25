import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './feeds.component';

const routes: Routes = [
  { path: '', component: FeedsComponent }
];


@NgModule({
  declarations: [
    FeedsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [FeedsComponent]
})
export class FeedsModule { }
