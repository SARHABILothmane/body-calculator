import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BodyMassMenComponent } from './body-mass-men.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

const routes: Routes = [
  { path: "", component: BodyMassMenComponent },
];

@NgModule({
  declarations: [
    BodyMassMenComponent,
  ],
  imports: [
    NbLayoutModule,
    FormBmiModule,
    RouterModule.forChild(routes),
    OtherCalcultorModule,
    BannerModule,
    BreadcrumbsModule
  ]
})
export class BodyMassMenModule { }
