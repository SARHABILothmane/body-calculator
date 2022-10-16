import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdealWeightCalculatorComponent } from './ideal-weight-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';


const routes: Routes = [
  { path: "", component: IdealWeightCalculatorComponent },
];
@NgModule({
  declarations: [
    IdealWeightCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    // NbFormFieldModule,
    NbSelectModule,
    // FontAwesomeModule,
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
    BannerModule,
    IsDecimalDirectiveModule,

  ]
})
export class IdealWeightCalculatorModule { }