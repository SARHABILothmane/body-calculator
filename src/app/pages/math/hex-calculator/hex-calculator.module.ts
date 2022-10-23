import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexCalculatorComponent } from './hex-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HexCalculatorComponent },
];

@NgModule({
  declarations: [
    HexCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class HexCalculatorModule { }
