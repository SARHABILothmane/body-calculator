import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentCalculatorComponent } from './exponent-calculator.component';

const routes: Routes = [
  { path: "", component: ExponentCalculatorComponent },
];


@NgModule({
  declarations: [
    ExponentCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class ExponentCalculatorModule { }
