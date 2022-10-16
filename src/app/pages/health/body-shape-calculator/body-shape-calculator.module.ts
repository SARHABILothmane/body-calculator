import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyShapeCalculatorComponent } from './body-shape-calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';

const routes: Routes = [
  { path: "", component: BodyShapeCalculatorComponent },
];
@NgModule({
  declarations: [
    BodyShapeCalculatorComponent,
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
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
    BannerModule,
    IsDecimalDirectiveModule,
  ]
})
export class BodyShapeCalculatorModule { }
