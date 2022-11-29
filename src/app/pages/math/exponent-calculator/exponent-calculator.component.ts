import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponent-calculator',
  templateUrl: './exponent-calculator.component.html',
  styleUrls: ['./exponent-calculator.component.scss']
})
export class ExponentCalculatorComponent implements OnInit {
  calculeFormExponent!: UntypedFormGroup;
  value!: number;
  exponentValue!: number;
  exponent!: number;
  rsltExponent: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormExponent = new UntypedFormGroup({
      value: new UntypedFormControl("2", [Validators.required]),
      exponent: new UntypedFormControl("3", [Validators.required]),
    });
  }
  // modelsBmi  = {
  //   age: 0,
  // }
  ngOnInit(): void {

  }
  get formExponent() { return this.calculeFormExponent.controls; }

  public CalculateExponent(): void {
    this.submitted = true;
    if (this.calculeFormExponent.valid) {
      this.error = "";
      this.rsltExponent = true;
      this.value = this.calculeFormExponent.value.value;
      this.exponentValue = this.calculeFormExponent.value.exponent;
      this.exponent = this.square(this.value, this.exponentValue)

    } else {
      this.error = "Please check the fields";
    }
  }

  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }

}
