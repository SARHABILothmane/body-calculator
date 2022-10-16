import { NgModule } from '@angular/core';
import { CalcultorRoutingModule } from './calculator-routing.module';
import { CalcultorComponent } from './calculator.component';

@NgModule({
  declarations: [
    CalcultorComponent,
  ],
  imports: [
    CalcultorRoutingModule,
  ]
})
export class CalcultorModule { }
