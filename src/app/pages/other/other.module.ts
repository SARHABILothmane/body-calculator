import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';

const routes: Routes = [
  { path: ".", component: OtherComponent },
  { path: "password-generator/.", loadChildren: () => import("src/app/pages/other/password-generator/password-generator.module").then(mod => mod.PasswordGeneratorModule) },

];


@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class OtherModule { }
