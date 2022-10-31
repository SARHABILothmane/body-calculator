import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyShapeCalculatorComponent } from './body-shape-calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

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
    NbSelectModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    IsDecimalDirectiveModule,
    BreadcrumbsModule,
    NgxJsonLdModule,

  ]
})
export class BodyShapeCalculatorModule { }
