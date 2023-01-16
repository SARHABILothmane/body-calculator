import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-calculator',
  templateUrl: './log-calculator.component.html',
  styleUrls: ['./log-calculator.component.scss']
})
export class LogCalculatorComponent implements OnInit {
  calculeFormLogarithm!: UntypedFormGroup;
  value!: string;
  logValue!: number;
  log!: number;
  rsltLogarithm: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormLogarithm = new UntypedFormGroup({
      value: new UntypedFormControl("2", [Validators.required, Validators.pattern("^[eE0-9]*$"),]),
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
    this.value = this.calculeFormLogarithm.value.value;
    this.logValue = this.calculeFormLogarithm.value.log;
    if (this.calculeFormLogarithm.valid) {
      this.error = "";
      this.rsltLogarithm = true;
      if (this.value === "e" || this.value === "E") {
        // let e = 2.718281828459045 
        this.log = this.getBaseLog(this.logValue, 2.718281828459045)
      } else {
        this.log = this.getBaseLog(this.logValue, Number(this.value))
        // Infinity
        // console.log(this.log);

      }
    } else {
      this.error = "Please check the fields";
    }
  }

  getBaseLog(firstNumber: number, secondNumber: number) {
    return Math.log(firstNumber) / Math.log(secondNumber);
  }

}
