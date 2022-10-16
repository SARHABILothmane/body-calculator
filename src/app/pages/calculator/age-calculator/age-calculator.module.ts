import { ReactiveFormsModule } from '@angular/forms';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbLayoutModule, NbDatepickerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgeCalculatorComponent } from './age-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BannerModule } from 'src/app/shared/banner/banner.module';


const routes: Routes = [
  { path: "", component: AgeCalculatorComponent },
];
@NgModule({
  declarations: [
    AgeCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
    BannerModule
  ]
})
export class AgeCalculatorModule { }
