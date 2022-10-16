import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BannerComponent]
})
export class BannerModule { }
