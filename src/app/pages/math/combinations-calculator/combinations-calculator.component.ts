import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combinations-calculator',
  templateUrl: './combinations-calculator.component.html',
  styleUrls: ['./combinations-calculator.component.scss']
})
export class CombinationsCalculatorComponent implements OnInit {
  calculeFormCombination!: UntypedFormGroup;
  n!: number;
  r!: number;
  combination!: number;
  rsltCombination: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormCombination = new UntypedFormGroup({
      n: new UntypedFormControl("", [Validators.required]),
      r: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {

  }
  get formCombination() { return this.calculeFormCombination.controls; }

  public CalculateRandomNumber(): void {
    this.submitted = true;
    if (this.calculeFormCombination.valid) {
      // Combinations, nCr = 	6! / 2! × (6 - 2)!  = 15
      this.error = "";
      this.rsltCombination = true;
      this.n = this.calculeFormCombination.value.n;
      this.r = this.calculeFormCombination.value.r;
      this.combination = this.factorialize(this.n) / (this.r * this.factorialize(this.n - this.r));

    } else {
      this.error = "Please check the fields";
    }
  }

  // with loooop 
  factorialize(num: number) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}
