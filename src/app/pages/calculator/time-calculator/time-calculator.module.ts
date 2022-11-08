import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { NbLayoutModule, NbCardModule, NbSelectModule, NbFormFieldModule, NbButtonModule, NbInputModule, NbCalendarModule, NbDatepickerModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCalculatorComponent } from './time-calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

const routes: Routes = [
  { path: "", component: TimeCalculatorComponent },
];

@NgModule({
  declarations: [
    TimeCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    NbCalendarModule,
    NbDatepickerModule.forRoot(),
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class TimeCalculatorModule { }
