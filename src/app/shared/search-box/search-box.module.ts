import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { NbAutocompleteModule, NbInputModule, NbLayoutModule } from '@nebular/theme';



@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    NbAutocompleteModule,
    NbLayoutModule,
    NbInputModule
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchBoxModule { }
