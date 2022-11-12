import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PregnancyDateCalculatorComponent } from './pregnancy-date-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbLayoutModule, NbDatepickerModule, NbSelectModule, NbProgressBarModule } from '@nebular/theme';


import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

const routes: Routes = [
  { path: "", component: PregnancyDateCalculatorComponent },
];

@NgModule({
  declarations: [
    PregnancyDateCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbSelectModule,
    NbProgressBarModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class PregnancyDateCalculatorModule { }
