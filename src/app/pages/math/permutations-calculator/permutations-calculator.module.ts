import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermutationsCalculatorComponent } from './permutations-calculator.component';

const routes: Routes = [
  { path: "", component: PermutationsCalculatorComponent },
];


@NgModule({
  declarations: [
    PermutationsCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class PermutationsCalculatorModule { }
