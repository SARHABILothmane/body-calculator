import { IsDecimalDirectiveModule } from './../../../services/is-decimal-directive/is-decimal-directive.module';
import { BannerModule } from './../../../shared/banner/banner.module';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbSelectModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyFatPorcentageRoutingModule } from './body-fat-porcentage-routing.module';
import { BodyFatPorcentageComponent } from './body-fat-porcentage.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

// export function playerFactory() {
//   return import('lottie-web/build/player/lottie_svg');
// }
@NgModule({
  declarations: [
    BodyFatPorcentageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    // NbAlertModule,
    // NbFormFieldModule, 
    NbSelectModule,
    OtherCalcultorModule,
    // FontAwesomeModule,
    // RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
    BodyFatPorcentageRoutingModule,
    NbLayoutModule,
    NgxJsonLdModule,
    BannerModule,
    IsDecimalDirectiveModule,
    // LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class BodyFatPorcentageModule { }