import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import { CalculatorScientifiqueComponent } from './calculator-scientifique/calculator-scientifique.component';

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
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class HomeModule { }
