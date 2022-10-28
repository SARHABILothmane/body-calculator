import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permutations-calculator',
  templateUrl: './permutations-calculator.component.html',
  styleUrls: ['./permutations-calculator.component.scss']
})
export class PermutationsCalculatorComponent implements OnInit {

  calculeFormPermutation!: UntypedFormGroup;
  n!: number;
  r!: number;
  permutation!: number;
  rsltPermutation: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormPermutation = new UntypedFormGroup({
      n: new UntypedFormControl("", [Validators.required]),
      r: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {

  }
  get formPermutation() { return this.calculeFormPermutation.controls; }

  public CalculateRandomNumber(): void {
    this.submitted = true;
    if (this.calculeFormPermutation.valid) {
      // Permutations, nPr =  6! / (6 - 2)! = 	30
      this.error = "";
      this.rsltPermutation = true;
      this.n = this.calculeFormPermutation.value.n;
      this.r = this.calculeFormPermutation.value.r;
      this.permutation = this.factorialize(this.n) / this.factorialize(this.n - this.r)

    } else {
      this.error = "Please check the fields";
    }
  }

  // factorialize(num: number) {
  //   if (num < 0) 
  //         return -1;
  //   else if (num == 0) 
  //       return 1;
  //   else {
  //       return (num * this.factorialize(num - 1));
  //   }
  // }
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
