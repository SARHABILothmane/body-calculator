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
  lenghtGenreteNumbers!: any;
  t: number = 1;
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
      duplication: new UntypedFormControl("no"),
      sortNumber: new UntypedFormControl("ascend"),
      typeNumber: new UntypedFormControl("integer"),
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
  public CalculateRandomNumberComprehensive() {
    this.generateNumbers = [];
    this.submitted = true;
    if (this.calculeFormRandomN.valid)
      this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
    for (let i = 0; i < this.lenghtGenreteNumbers; i++) {
      // check Type of result to generate if integer or decimal 
      let numberGenerated: number;
      if (this.calculeFormRandomN.value.typeNumber == "integer") {
        numberGenerated = Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit);
      } else {
        numberGenerated = Math.random() * this.calculeFormRandomN.value.upperLimit;
      }

      // check if Allow duplication in results 
      if (this.calculeFormRandomN.value.duplication == 'no') {
        let checkIfNumberInArray = this.generateNumbers.filter(x => x == numberGenerated);

        if (checkIfNumberInArray.length == 0) {
          this.generateNumbers.push(numberGenerated);
        } else {
          i--;
        }
      } else {
        this.generateNumbers.push(numberGenerated);
      }
    }

    // check if ascend or desend or no
    if (this.calculeFormRandomN.value.sortNumber != "No") {
      if (this.calculeFormRandomN.value.sortNumber == "ascend") {
        this.generateNumbers.sort(function (a, b) {
          return a - b;
        });
      } else {
        this.generateNumbers.sort(function (a, b) {
          return b - a;
        });
      }
    }
  }
  // public CalculateRandomNumberComprehensivehh() {
  //   this.submitted = true;
  //   if (this.calculeFormRandomN.valid) {
  //     if (this.t = 1) {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = nums,
  //         this.generateNumbers;
  //     } else {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = nums,
  //         this.generateNumbers;
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //       this.generateNumbers.sort(function (a, b) {
  //         return a - b;
  //       });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //       this.generateNumbers.sort(function (a, b) {
  //         return a - b;
  //       });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //       this.generateNumbers.sort(function (a, b) {
  //         return a - b;
  //       });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //       this.generateNumbers.sort(function (a, b) {
  //         return a - b;
  //       });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //       this.generateNumbers.sort(function (a, b) {
  //         return b - a;
  //       });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.floor(Math.random() * this.calculeFormRandomN.value.upperLimit));
  //       this.generateNumbers.sort(function (a, b) {
  //         return b - a;
  //       });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //       this.generateNumbers.sort(function (a, b) {
  //         return b - a;
  //       });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "yes" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       this.generateNumbers = Array.from({ length: this.lenghtGenreteNumbers }, () => Math.random() * this.calculeFormRandomN.value.upperLimit);
  //       this.generateNumbers.sort(function (a, b) {
  //         return b - a;
  //       });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return a - b;
  //         });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return a - b;
  //         });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return a - b;
  //         });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "ascend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return a - b;
  //         });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return b - a;
  //         });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return b - a;
  //         });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return b - a;
  //         });
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "descend" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers.sort(function (a, b) {
  //           return b - a;
  //         });
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = nums,
  //         this.generateNumbers;
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "integer" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.floor(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1)); }
  //       this.generateNumbers = nums,
  //         this.generateNumbers;
  //     }

  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers != '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.genreteNumbers;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers;
  //     }
  //     if (this.calculeFormRandomN.value.duplication === "no" && this.calculeFormRandomN.value.sortNumber === "No" && this.calculeFormRandomN.value.typeNumber === "decimal" && this.lenghtGenreteNumbers === '') {
  //       let nums: any = new Set();
  //       this.lenghtGenreteNumbers = this.calculeFormRandomN.value.upperLimit;
  //       while (nums.size < this.lenghtGenreteNumbers) { nums.add(Math.random() * (this.calculeFormRandomN.value.upperLimit - 1 + 1) + 1); }
  //       this.generateNumbers = Array.from(nums),
  //         this.generateNumbers;
  //     }
  //   }
  // }
}
