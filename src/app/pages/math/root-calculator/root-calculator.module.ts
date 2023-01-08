import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootCalculatorComponent } from './root-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

const routes: Routes = [
  { path: "", component: RootCalculatorComponent },
];


@NgModule({
  declarations: [
    RootCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    OtherCalcultorModule,
    BannerModule,
    BreadcrumbsModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),

  ]
})
export class RootCalculatorModule { }
