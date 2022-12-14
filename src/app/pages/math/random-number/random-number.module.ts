import { NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { RandomNumberComponent } from './random-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

const routes: Routes = [
  { path: "", component: RandomNumberComponent },
];

@NgModule({
  declarations: [RandomNumberComponent],
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
export class RandomNumberModule { }
