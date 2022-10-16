import { NgModule } from '@angular/core';
import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';

@NgModule({
  declarations: [
    HealthComponent,
  ],
  imports: [
    HealthRoutingModule,
  ]
})
export class HealthModule { }
