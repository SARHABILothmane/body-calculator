import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-percentage-calculator',
  templateUrl: './percentage-calculator.component.html',
  styleUrls: ['./percentage-calculator.component.scss']
})
export class PercentageCalculatorComponent implements OnInit {
  calculePercentageY!: UntypedFormGroup;
  calculePercentageX!: UntypedFormGroup;
  calculePercentageP!: UntypedFormGroup;
  calculePercentageIncDec!: UntypedFormGroup;
  error!: string;
  submitted: boolean = false;
  // percentegeRslt!: number;
  // percentage!: number;
  // of!: number;
  p!: number;
  x!: number;
  y!: number;
  pOne!: number;
  xOne!: number;
  yOne!: number;
  pTwo!: number;
  xTwo!: number;
  yTwo!: number;
  pTree!: number;
  xTree!: number;
  yTree!: number;
  rsltY: boolean = false;
  rsltX: boolean = false;
  rsltP: boolean = false;
  rsltIncDec: boolean = false;
  resultIncDec!: number;
  incDecPercentage: string = "increased";


  constructor() {
    this.calculePercentageY = new UntypedFormGroup({
      p: new UntypedFormControl("", [Validators.required]),
      x: new UntypedFormControl("", [Validators.required]),
    });
    this.calculePercentageX = new UntypedFormGroup({
      x: new UntypedFormControl("", [Validators.required]),
      y: new UntypedFormControl("", [Validators.required]),
    });
    this.calculePercentageP = new UntypedFormGroup({
      x: new UntypedFormControl("", [Validators.required]),
      p: new UntypedFormControl("", [Validators.required]),
    });
    this.calculePercentageIncDec = new UntypedFormGroup({
      x: new UntypedFormControl("", [Validators.required]),
      selectPercentage: new UntypedFormControl("increased", [Validators.required]),
      p: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  get formPercentageY() { return this.calculePercentageY.controls; }
  get formPercentageX() { return this.calculePercentageX.controls; }
  get formPercentageP() { return this.calculePercentageP.controls; }
  get formPercentageIncDec() { return this.calculePercentageIncDec.controls; }

  CalculatePercentageY() {
    this.submitted = true;
    if (this.calculePercentageY.valid) {
      this.rsltY = true;
      this.p = this.calculePercentageY.value.p;
      this.x = this.calculePercentageY.value.x;
      let result = this.p * this.x;
      this.y = result / 100;
      // y= x*p//100            what is p% of x? formula
      // p= x*100/y              x is what percent of y? formula
      // y= x*100/p           x is p% of what? formula
      // y= +- 100+P/100  what is x increased/decreased by p% formula
    }
  }
  CalculatePercentageX() {
    this.submitted = true;
    if (this.calculePercentageX.valid) {
      this.rsltX = true;
      this.yOne = this.calculePercentageX.value.y;
      this.xOne = this.calculePercentageX.value.x;
      let result = this.xOne * 100;
      this.pOne = result / this.yOne;
      // p= x*100/y              x is what percent of y? formula
    }
  }
  CalculatePercentageP() {
    this.submitted = true;
    if (this.calculePercentageP.valid) {
      this.rsltP = true;
      this.pTwo = this.calculePercentageP.value.p;
      this.xTwo = this.calculePercentageP.value.x;
      let result = this.xTwo * 100;
      this.yTwo = result / this.pTwo;
      // y= x*100/p           x is p% of what? formula
    }
  }
  CalculatePercentageIncDec() {
    this.submitted = true;
    if (this.calculePercentageIncDec.valid) {
      this.rsltIncDec = true;
      this.pTree = this.calculePercentageIncDec.value.p;
      this.xTree = this.calculePercentageIncDec.value.x;
      this.incDecPercentage = this.calculePercentageIncDec.value.selectPercentage;
      if (this.incDecPercentage === "increased") {
        this.resultIncDec = this.pTree / 100;
        this.yTree = this.xTree * (1 + this.resultIncDec);
      }
      if (this.incDecPercentage === "decreased") {
        this.resultIncDec = this.pTree / 100;
        this.yTree = this.xTree * (1 - this.resultIncDec);
      }

      // y= +- . 100+P/100  what is x increased/decreased by p% formula

    }
  }
  selectPercentage() {

  }
}
