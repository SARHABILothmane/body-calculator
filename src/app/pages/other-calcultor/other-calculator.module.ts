import { OtherCalcultorMathComponent } from './other-calculator-math/other-calculator-math.component';

import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { OtherCalcultorHealthComponent } from './other-calculator-health/other-calculator-health.component';
// import { NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { OtherCalcultorTimeComponent } from './other-calculator-time/other-calculator-time.component';
import { SharethisAngularModule } from 'sharethis-angular';
import { SearchBoxModule } from 'src/app/shared/search-box/search-box.module';
import { OtherCalcultorComponent } from './other-calculator/other-calculator.component';
@NgModule({
  declarations: [OtherCalcultorHealthComponent, OtherCalcultorTimeComponent, OtherCalcultorMathComponent, OtherCalcultorComponent],
  imports: [
    // CommonModule,
    // NbIconModule,
    RouterModule,
    SharethisAngularModule,
    SearchBoxModule
  ],
  exports: [OtherCalcultorHealthComponent, OtherCalcultorTimeComponent, OtherCalcultorMathComponent, OtherCalcultorComponent]
})
export class OtherCalcultorModule { }
