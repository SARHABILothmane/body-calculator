import { BraSizeCalculatorComponent } from './bra-size-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';

const routes: Routes = [
  { path: "", component: BraSizeCalculatorComponent },
];

@NgModule({
  declarations: [
    BraSizeCalculatorComponent
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
export class BraSizeCalculatorModule { }
