import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit {
  calculeFormRandomNum!: UntypedFormGroup;
  calculeFormRandomN!: UntypedFormGroup;
  generatedNumber!: number;
  generatedN!: number;
  error!: string;
  submitted: boolean = false;
  generateNumbers: Array<number> = [];
  constructor() {
    this.calculeFormRandomNum = new UntypedFormGroup({
      lowerLimit: new UntypedFormControl("", [Validators.required]),
      upperLimit: new UntypedFormControl("", [Validators.required]),
    });
    this.calculeFormRandomN = new UntypedFormGroup({
      lowerLimit: new UntypedFormControl("", [Validators.required]),
      upperLimit: new UntypedFormControl("", [Validators.required]),
      genreteNumbers: new UntypedFormControl(""),
      duplication: new UntypedFormControl(""),
      sortNumber: new UntypedFormControl(""),
      typeNumber: new UntypedFormControl(""),
    });
  }

  ngOnInit(): void {
  }
  get formRandomNumber() { return this.calculeFormRandomNum.controls; }
  get formRandomN() { return this.calculeFormRandomN.controls; }

  public CalculateRandomNumber(): void {
    this.submitted = true;
    if (this.calculeFormRandomNum.valid && this.calculeFormRandomNum.value.upperLimit >= this.calculeFormRandomNum.value.lowerLimit) {
      this.error = '';
      // find diff
      let difference = this.calculeFormRandomNum.value.lowerLimit - this.calculeFormRandomNum.value.upperLimit;
      // generate random number 
      this.generatedNumber = Math.random();
      // multiply with difference 
      this.generatedNumber = Math.floor(this.generatedNumber * difference);
      // add with min value 
      this.generatedNumber = this.generatedNumber + this.calculeFormRandomNum.value.upperLimit;
      // this.generatedNumber = ( this.calculeFormRandomNum.value.upperLimit, this.calculeFormRandomNum.value.lowerLimit) => Math.floor(Math.random() * (this.calculeFormRandomNum.value.lowerLimit - this.calculeFormRandomNum.value.upperLimit)) + this.calculeFormRandomNum.value.upperLimit;
    }
    if (this.calculeFormRandomNum.value.upperLimit < this.calculeFormRandomNum.value.lowerLimit) {
      this.error = "The lower limit value needs to be smaller than the upper limit value.";
    }
  }
  public CalculateRandomNumber2() {
    this.submitted = true;
    if (this.calculeFormRandomN.valid) {
      // if (this.calculeFormRandomN.value.upperLimit >= this.calculeFormRandomN.value.lowerLimit) {
      //   this.error = '';
      //   // find diff
      //   let difference = this.calculeFormRandomN.value.lowerLimit - this.calculeFormRandomN.value.upperLimit;
      //   // generate random number 
      //   this.generatedN = Math.random();
      //   // multiply with difference 
      //   this.generatedN = Math.floor(this.generatedN * difference);
      //   // add with min value 
      //   this.generatedN = this.generatedN + this.calculeFormRandomN.value.upperLimit;
      //   // this.generatedNumber = ( this.calculeFormRandomNum.value.upperLimit, this.calculeFormRandomNum.value.lowerLimit) => Math.floor(Math.random() * (this.calculeFormRandomNum.value.lowerLimit - this.calculeFormRandomNum.value.upperLimit)) + this.calculeFormRandomNum.value.upperLimit;
      // }
      // if (this.calculeFormRandomNum.value.upperLimit < this.calculeFormRandomNum.value.lowerLimit) {
      //   this.error = "The lower limit value needs to be smaller than the upper limit value.";
      // }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.genreteNumbers));
        this.generateNumbers.sort(function (a, b) {
          return a - b;
        });
      }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.random() * this.calculeFormRandomN.value.genreteNumbers);
        this.generateNumbers.sort(function (a, b) {
          return a - b;
        });
      }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.genreteNumbers));
      }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.random() * this.calculeFormRandomN.value.genreteNumbers);
      }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.genreteNumbers));
        this.generateNumbers.sort(function (a, b) {
          return b - a;
        });
      }
      if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        this.generateNumbers = Array.from({ length: this.calculeFormRandomN.value.upperLimit }, () => Math.random() * this.calculeFormRandomN.value.genreteNumbers);
        this.generateNumbers.sort(function (a, b) {
          return b - a;
        });
      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
        this.generateNumbers = Array.from(nums),
          this.generateNumbers.sort(function (a, b) {
            return a - b;
          });
      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
        this.generateNumbers = Array.from(nums),
          this.generateNumbers.sort(function (a, b) {
            return a - b;
          });
      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
        this.generateNumbers = Array.from(nums),
          this.generateNumbers.sort(function (a, b) {
            return b - a;
          });
      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
        this.generateNumbers = Array.from(nums),
          this.generateNumbers.sort(function (a, b) {
            return b - a;
          });

      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
        this.generateNumbers = nums,
          this.generateNumbers;
      }
      if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal") {
        let nums: any = new Set();
        while (nums.size < this.calculeFormRandomN.value.upperLimit) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
        this.generateNumbers = Array.from(nums),
          this.generateNumbers;
      }
    }
  }
}
