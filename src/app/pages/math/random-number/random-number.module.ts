import { NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { RandomNumberComponent } from './random-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", component: RandomNumberComponent },
];

@NgModule({
  declarations: [RandomNumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class RandomNumberModule { }
