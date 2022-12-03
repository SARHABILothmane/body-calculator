import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermutationsCalculatorComponent } from './permutations-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

const routes: Routes = [
  { path: "", component: PermutationsCalculatorComponent },
];


@NgModule({
  declarations: [
    PermutationsCalculatorComponent
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
export class PermutationsCalculatorModule { }
