import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound.component';


const routes: Routes = [
  { path: "", component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    PagenotfoundComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagenotfoundModule { }
