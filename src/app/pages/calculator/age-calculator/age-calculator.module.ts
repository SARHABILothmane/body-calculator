import { ReactiveFormsModule } from '@angular/forms';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbLayoutModule, NbDatepickerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgeCalculatorComponent } from './age-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';


const routes: Routes = [
  { path: "", component: AgeCalculatorComponent },
];
@NgModule({
  declarations: [
    AgeCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    BreadcrumbsModule
  ]
})
export class AgeCalculatorModule { }
