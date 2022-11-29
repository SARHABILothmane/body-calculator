import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootCalculatorComponent } from './root-calculator.component';

const routes: Routes = [
  { path: "", component: RootCalculatorComponent },
];


@NgModule({
  declarations: [
    RootCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class RootCalculatorModule { }
