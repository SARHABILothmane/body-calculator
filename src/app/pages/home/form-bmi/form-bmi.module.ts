import { ReactiveFormsModule } from '@angular/forms';
import { NbTabsetModule } from '@nebular/theme';
import { FormBmiComponent } from './form-bmi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from 'src/app/shared/banner/banner.module';

// export function playerFactory() {
//   return import('lottie-web/build/player/lottie_svg');
// }

@NgModule({
  declarations: [
    FormBmiComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbTabsetModule,
    // NbCardModule,
    // NbAlertModule,
    // NbFormFieldModule,
    // NbInputModule,
    // NbButtonModule,
    // NbIconModule,
    // LottieModule.forRoot({ player: playerFactory }),
    BannerModule

  ],
  exports: [FormBmiComponent]
})
export class FormBmiModule { }
