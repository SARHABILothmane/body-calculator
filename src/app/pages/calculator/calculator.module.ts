import { PregnancyDateCalculatorModule } from './pregnancy-date-calculator/pregnancy-date-calculator.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcultorComponent } from './calculator.component';


const routes: Routes = [
  { path: ".", component: CalcultorComponent },
  { path: "date-calculator/.", loadChildren: () => import("src/app/pages/calculator/date-calculator/date-calculator.module").then(mod => mod.DateCalculatorModule) },
  { path: "age-calculator/.", loadChildren: () => import("src/app/pages/calculator/age-calculator/age-calculator.module").then(mod => mod.AgeCalculatorModule) },
  { path: "time-calculator/.", loadChildren: () => import("src/app/pages/calculator/time-calculator/time-calculator.module").then(mod => mod.TimeCalculatorModule) },
  { path: "hours-calculator/.", loadChildren: () => import("src/app/pages/calculator/hours-calculator/hours-calculator.module").then(mod => mod.HoursCalculatorModule) },
  { path: "pregnancy-date-calculator/.", loadChildren: () => import("src/app/pages/calculator/pregnancy-date-calculator/pregnancy-date-calculator.module").then(mod => mod.PregnancyDateCalculatorModule) },
];

@NgModule({
  declarations: [
    CalcultorComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CalcultorModule { }
