import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-calculator',
  templateUrl: './log-calculator.component.html',
  styleUrls: ['./log-calculator.component.scss']
})
export class LogCalculatorComponent implements OnInit {
  calculeFormLogarithm!: UntypedFormGroup;
  value!: number;
  logValue!: number;
  log!: number;
  rsltLogarithm: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormLogarithm = new UntypedFormGroup({
      value: new UntypedFormControl("2", [Validators.required]),
      log: new UntypedFormControl("3", [Validators.required]),
    });
  }
  // modelsBmi  = {
  //   age: 0,
  // ₂.₇₁₈₂₈₁₈₂₈₄₅₉₀₄₅
  // }
  ngOnInit(): void {

  }
  get formLogarithm() { return this.calculeFormLogarithm.controls; }

  public CalculateLog(): void {
    this.submitted = true;
    if (this.calculeFormLogarithm.valid) {
      this.error = "";
      this.rsltLogarithm = true;
      this.value = this.calculeFormLogarithm.value.value;
      this.logValue = this.calculeFormLogarithm.value.log;
      this.log = this.getBaseLog(this.logValue, this.value)

    } else {
      this.error = "Please check the fields";
    }
  }

  getBaseLog(firstNumber: number, secondNumber: number) {
    return Math.log(firstNumber) / Math.log(secondNumber);
  }

}
