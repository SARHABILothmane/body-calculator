import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogCalculatorComponent } from './log-calculator.component';

const routes: Routes = [
  { path: "", component: LogCalculatorComponent },
];


@NgModule({
  declarations: [
    LogCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class LogCalculatorModule { }
