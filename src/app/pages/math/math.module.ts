import { MathComponent } from './math.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';


@NgModule({
  declarations: [MathComponent],
  imports: [
    CommonModule,
    MathRoutingModule
  ]
})
export class MathModule { }
