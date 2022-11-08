import { OtherCalcultorMathComponent } from './other-calculator-math/other-calculator-math.component';

import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { OtherCalcultorHealthComponent } from './other-calculator-health/other-calculator-health.component';
// import { NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { OtherCalcultorTimeComponent } from './other-calculator-time/other-calculator-time.component';
import { SharethisAngularModule } from 'sharethis-angular';
import { SearchBoxModule } from 'src/app/shared/search-box/search-box.module';
@NgModule({
  declarations: [OtherCalcultorHealthComponent, OtherCalcultorTimeComponent, OtherCalcultorMathComponent],
  imports: [
    // CommonModule,
    // NbIconModule,
    RouterModule,
    SharethisAngularModule,
    SearchBoxModule
  ],
  exports: [OtherCalcultorHealthComponent, OtherCalcultorTimeComponent, OtherCalcultorMathComponent]
})
export class OtherCalcultorModule { }
