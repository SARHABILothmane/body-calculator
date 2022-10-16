import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasalMetabolicRateCalculatorRoutingModule } from './basal-metabolic-rate-calculator-routing.module';
import { BasalMetabolicRateCalculatorComponent } from './basal-metabolic-rate-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';


@NgModule({
  declarations: [
    BasalMetabolicRateCalculatorComponent,
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
    BasalMetabolicRateCalculatorRoutingModule,
    OtherCalcultorModule,
    NgxJsonLdModule,
    BannerModule,
    IsDecimalDirectiveModule,

  ]
})
export class BasalMetabolicRateCalculatorModule { }
