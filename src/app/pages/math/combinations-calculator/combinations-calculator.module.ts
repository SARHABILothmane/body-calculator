import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationsCalculatorComponent } from './combinations-calculator.component';

const routes: Routes = [
  { path: "", component: CombinationsCalculatorComponent },
];

@NgModule({
  declarations: [
    CombinationsCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class CombinationsCalculatorModule { }
