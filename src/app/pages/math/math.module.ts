import { MathComponent } from './math.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {path: ".", component: MathComponent },
      { path: "random-number-generator/.", loadChildren: () => import("src/app/pages/math/random-number/random-number.module").then(mod => mod.RandomNumberModule) },
      { path: "percentage-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-calculator/percentage-calculator.module").then(mod => mod.PercentageCalculatorModule) },
      { path: "percentage-error-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-error-calculator/percentage-error-calculator.module").then(mod => mod.PercentageErrorCalculatorModule) },
      { path: "binary-calculator/.", loadChildren: () => import("src/app/pages/math/binary-calculator/binary-calculator.module").then(mod => mod.BinaryCalculatorModule) },
      { path: "hex-calculator/.", loadChildren: () => import("src/app/pages/math/hex-calculator/hex-calculator.module").then(mod => mod.HexCalculatorModule) },
      { path: "permutations-calculator/.", loadChildren: () => import("src/app/pages/math/permutations-calculator/permutations-calculator.module").then(mod => mod.PermutationsCalculatorModule) },
      { path: "combinations-calculator/.", loadChildren: () => import("src/app/pages/math/combinations-calculator/combinations-calculator.module").then(mod => mod.CombinationsCalculatorModule) },

];

@NgModule({
  declarations: [MathComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MathModule { }
