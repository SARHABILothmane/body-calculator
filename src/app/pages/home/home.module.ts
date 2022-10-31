import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import { CalculatorScientifiqueComponent } from './calculator-scientifique/calculator-scientifique.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    HomeComponent,
    CalculatorScientifiqueComponent
  ],
  imports: [
    HomeRoutingModule,
    NgxJsonLdModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class HomeModule { }
