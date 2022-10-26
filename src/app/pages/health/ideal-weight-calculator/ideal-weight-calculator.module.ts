import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdealWeightCalculatorComponent } from './ideal-weight-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';


const routes: Routes = [
  { path: "", component: IdealWeightCalculatorComponent },
];
@NgModule({
  declarations: [
    IdealWeightCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    IsDecimalDirectiveModule,
    BreadcrumbsModule

  ]
})
export class IdealWeightCalculatorModule { }
