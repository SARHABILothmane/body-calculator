
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageErrorCalculatorComponent } from './percentage-error-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';

const routes: Routes = [
  { path: "", component: PercentageErrorCalculatorComponent },
];


@NgModule({
  declarations: [
    PercentageErrorCalculatorComponent
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
export class PercentageErrorCalculatorModule { }
