import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationsCalculatorComponent } from './combinations-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

const routes: Routes = [
  { path: "", component: CombinationsCalculatorComponent },
];

@NgModule({
  declarations: [
    CombinationsCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    NgxJsonLdModule,
    BreadcrumbsModule
  ]
})
export class CombinationsCalculatorModule { }
