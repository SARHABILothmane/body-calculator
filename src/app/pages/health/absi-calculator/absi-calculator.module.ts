import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsiCalculatorComponent } from './absi-calculator.component';
import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { BannerModule } from './../../../shared/banner/banner.module';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

const routes: Routes = [
  { path: "", component: AbsiCalculatorComponent },
];

@NgModule({
  declarations: [
    AbsiCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbSelectModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    BannerModule,
    IsDecimalDirectiveModule,
    BreadcrumbsModule,
    NgxJsonLdModule
  ]
})
export class AbsiCalculatorModule { }
