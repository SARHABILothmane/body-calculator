import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BodyMassWomenComponent } from './body-mass-women.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

const routes: Routes = [
  { path: "", component: BodyMassWomenComponent },
];

@NgModule({
  declarations: [
    BodyMassWomenComponent,
  ],
  imports: [
    NbLayoutModule,
    FormBmiModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
    BannerModule,
    BreadcrumbsModule
  ]
})
export class BodyMassWomenModule { }
