import { NbLayoutModule, NbDatepickerModule, NbSelectModule, NbCalendarModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateCalculatorComponent } from './date-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

const routes: Routes = [
  { path: "", component: DateCalculatorComponent },
];
@NgModule({
  declarations: [
    DateCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbSelectModule,
    NbCalendarModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule

  ]
})
export class DateCalculatorModule { }
