import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { BannerModule } from './../../../shared/banner/banner.module';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyFatPorcentageRoutingModule } from './body-fat-porcentage-routing.module';
import { BodyFatPorcentageComponent } from './body-fat-porcentage.component';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [
    BodyFatPorcentageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbSelectModule,
    OtherCalcultorModule,
    BodyFatPorcentageRoutingModule,
    NbLayoutModule,
    BannerModule,
    IsDecimalDirectiveModule,
    BreadcrumbsModule
  ]
})
export class BodyFatPorcentageModule { }
