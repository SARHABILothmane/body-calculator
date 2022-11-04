import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CalculatorScientifiqueComponent } from './calculator-scientifique/calculator-scientifique.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SearchBoxModule } from 'src/app/shared/search-box/search-box.module';
import { CommonModule } from '@angular/common';

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
    SearchBoxModule,
    CommonModule
  ]
})
export class HomeModule { }
