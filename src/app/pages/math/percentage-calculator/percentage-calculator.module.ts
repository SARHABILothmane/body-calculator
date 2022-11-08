import { BannerModule } from './../../../shared/banner-amp/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageCalculatorComponent } from './percentage-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';


const routes: Routes = [
  { path: "", component: PercentageCalculatorComponent },
];

@NgModule({
  declarations: [
    PercentageCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class PercentageCalculatorModule { }
