import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinaryCalculatorComponent } from './binary-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: BinaryCalculatorComponent },
];

@NgModule({
  declarations: [
    BinaryCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class BinaryCalculatorModule { }
