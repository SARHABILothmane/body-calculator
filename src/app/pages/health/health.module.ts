import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health.component';


const routes: Routes = [
  { path: ".", component: HealthComponent },
  { path: "bmi-calculator/.", loadChildren: () => import("src/app/pages/health/body-mass-index/body-mass-index.module").then(mod => mod.BodyMassIndexModule) },
  { path: "bmi-calculator-women/.", loadChildren: () => import("src/app/pages/health/body-mass-women/body-mass-women.module").then(mod => mod.BodyMassWomenModule) },
  { path: "bmi-calculator-men/.", loadChildren: () => import("src/app/pages/health/body-mass-men/body-mass-men.module").then(mod => mod.BodyMassMenModule) },
  { path: "body-fat-percentage-calculator/.", loadChildren: () => import("src/app/pages/health/body-fat-porcentage/body-fat-porcentage.module").then(mod => mod.BodyFatPorcentageModule) },
  { path: "ideal-weight-calculator/.", loadChildren: () => import("src/app/pages/health/ideal-weight-calculator/ideal-weight-calculator.module").then(mod => mod.IdealWeightCalculatorModule) },
  { path: "body-shape-calculator/.", loadChildren: () => import("src/app/pages/health/body-shape-calculator/body-shape-calculator.module").then(mod => mod.BodyShapeCalculatorModule) },
  { path: "bmr-calculator/.", loadChildren: () => import("src/app/pages/health/basal-metabolic-rate-calculator/basal-metabolic-rate-calculator.module").then(mod => mod.BasalMetabolicRateCalculatorModule) },
  { path: "healthy-weight-calculator/.", loadChildren: () => import("src/app/pages/health/healthy-weight-calculator/healthy-weight-calculator.module").then(mod => mod.HealthyWeightCalculatorModule) },
  { path: "lean-body-mass-calculator/.", loadChildren: () => import("src/app/pages/health/lean-body-mass-calculator/lean-body-mass-calculator.module").then(mod => mod.LeanBodyMassCalculatorModule) },
  { path: "bra-size-calculator/.", loadChildren: () => import("src/app/pages/health/bra-size-calculator/bra-size-calculator.module").then(mod => mod.BraSizeCalculatorModule) },
  { path: "absi-calculator/.", loadChildren: () => import("src/app/pages/health/absi-calculator/absi-calculator.module").then(mod => mod.AbsiCalculatorModule) },

];

@NgModule({
  declarations: [
    HealthComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HealthModule { }
