import { MathComponent } from './math.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: ".", component: MathComponent },
  { path: "random-number-generator/.", loadChildren: () => import("src/app/pages/math/random-number/random-number.module").then(mod => mod.RandomNumberModule) },
  { path: "percentage-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-calculator/percentage-calculator.module").then(mod => mod.PercentageCalculatorModule) },
  { path: "percent-error-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-error-calculator/percentage-error-calculator.module").then(mod => mod.PercentageErrorCalculatorModule) },
  { path: "percentage-increase-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-increase-calculator/percentage-increase-calculator.module").then(mod => mod.PercentageIncreaseCalculatorModule) },
  { path: "percentage-decrease-calculator/.", loadChildren: () => import("src/app/pages/math/percentage-decrease-calculator/percentage-decrease-calculator.module").then(mod => mod.PercentageDecreaseCalculatorModule) },
  { path: "binary-calculator/.", loadChildren: () => import("src/app/pages/math/binary-calculator/binary-calculator.module").then(mod => mod.BinaryCalculatorModule) },
  { path: "hex-calculator/.", loadChildren: () => import("src/app/pages/math/hex-calculator/hex-calculator.module").then(mod => mod.HexCalculatorModule) },
  { path: "permutation-calculator/.", loadChildren: () => import("src/app/pages/math/permutations-calculator/permutations-calculator.module").then(mod => mod.PermutationsCalculatorModule) },
  { path: "combination-calculator/.", loadChildren: () => import("src/app/pages/math/combinations-calculator/combinations-calculator.module").then(mod => mod.CombinationsCalculatorModule) },
  { path: "exponent-calculator/.", loadChildren: () => import("src/app/pages/math/exponent-calculator/exponent-calculator.module").then(mod => mod.ExponentCalculatorModule) },
  { path: "log-calculator/.", loadChildren: () => import("src/app/pages/math/log-calculator/log-calculator.module").then(mod => mod.LogCalculatorModule) },
  { path: "root-calculator/.", loadChildren: () => import("src/app/pages/math/root-calculator/root-calculator.module").then(mod => mod.RootCalculatorModule) },
  { path: "z-score-calculator/.", loadChildren: () => import("src/app/pages/math/z-score-calculator/z-score-calculator.module").then(mod => mod.ZScoreCalculatorModule) },
];

@NgModule({
  declarations: [MathComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MathModule { }
