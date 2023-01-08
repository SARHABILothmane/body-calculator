import { NbLayoutModule, NbTooltipModule, NbProgressBarModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

import { PasswordGeneratorComponent } from './password-generator.component';

const routes: Routes = [
  { path: "", component: PasswordGeneratorComponent },
];


@NgModule({
  declarations: [
    PasswordGeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbLayoutModule,
    OtherCalcultorModule,
    BannerModule,
    BreadcrumbsModule,
    NgxJsonLdModule,
    NbTooltipModule,
    NbProgressBarModule,
    // NbActionsModule,
    RouterModule.forChild(routes),
  ]
})
export class PasswordGeneratorModule { }
