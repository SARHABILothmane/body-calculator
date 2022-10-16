import { MathComponent } from './math.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: MathComponent, children: [
      { path: "random-number-generator", loadChildren: () => import("src/app/pages/math/random-number/random-number.module").then(mod => mod.RandomNumberModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
