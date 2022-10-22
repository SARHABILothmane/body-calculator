import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageErrorCalculatorComponent } from './percentage-error-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: PercentageErrorCalculatorComponent },
];


@NgModule({
  declarations: [
    PercentageErrorCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class PercentageErrorCalculatorModule { }
