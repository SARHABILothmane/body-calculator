import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeanBodyMassCalculatorComponent } from './lean-body-mass-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

const routes: Routes = [
  { path: "", component: LeanBodyMassCalculatorComponent },
];

@NgModule({
  declarations: [
    LeanBodyMassCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    OtherCalcultorModule,
    BreadcrumbsModule,
    RouterModule.forChild(routes),
  ]
})
export class LeanBodyMassCalculatorModule { }
