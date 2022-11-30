import { ReactiveFormsModule } from '@angular/forms';
import { NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from './../../../shared/banner/banner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageIncreaseCalculatorComponent } from './percentage-increase-calculator.component';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

const routes: Routes = [
  { path: "", component: PercentageIncreaseCalculatorComponent },
];


@NgModule({
  declarations: [
    PercentageIncreaseCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class PercentageIncreaseCalculatorModule { }
