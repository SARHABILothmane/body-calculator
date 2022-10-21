import { NbLayoutModule, NbDatepickerModule, NbSelectModule, NbCalendarModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateCalculatorComponent } from './date-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

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
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    // NbFormFieldModule,
    NbSelectModule,
    NbCalendarModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
    BannerModule,
    BreadcrumbsModule

  ]
})
export class DateCalculatorModule { }
