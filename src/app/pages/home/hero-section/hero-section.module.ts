import { FormBmiModule } from './../form-bmi/form-bmi.module';
// import { LottieModule } from 'ngx-lottie';
// import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { HeroSectionComponent } from './hero-section.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HeroSectionRoutingModule } from './hero-section-routing.module';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';

// export function playerFactory() {
//   return import('lottie-web/build/player/lottie_svg');
// }

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [
    // CommonModule,
    HeroSectionRoutingModule,
    // NbIconModule,
    FormBmiModule,
    // NbButtonModule,
    OtherCalcultorModule,
    BannerModule,
    BreadcrumbsModule
    // LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [HeroSectionComponent]
})
export class HeroSectionModule { }
