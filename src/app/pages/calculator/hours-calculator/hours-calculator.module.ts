import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbCalendarModule, NbSelectModule, NbFormFieldModule, NbInputModule, NbDatepickerModule, NbTimepickerModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursCalculatorComponent } from './hours-calculator.component';


const routes: Routes = [
  { path: "", component: HoursCalculatorComponent },
];

@NgModule({
  declarations: [
    HoursCalculatorComponent
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
    // NbTimepickerModule.forRoot(),
    NbTimepickerModule.forRoot({
      localization: {
        hoursText: 'Hr',
        minutesText: 'Min',
        secondsText: 'Sec',
        ampmText: 'Am/Pm',
      }
    }),
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class HoursCalculatorModule { }
