import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-binary-calculator',
  templateUrl: './binary-calculator.component.html',
  styleUrls: ['./binary-calculator.component.scss']
})
export class BinaryCalculatorComponent implements OnInit {
  calculeBinary!: UntypedFormGroup;
  conveBinaryToDeci!: UntypedFormGroup;
  conveDeciToBinary!: UntypedFormGroup;
  error!: string;
  submitted: boolean = false;
  rsltBinary!: any;
  rsltDecimal!: any;
  rsltDecimalBinary!: any;
  binaryOne!: any;
  binaryTwo!: any;
  binaryOneCal!: any;
  binaryTwoCal!: any;
  rsltCalBinary!: number;
  rsltCalDecimal!: string;
  addOrSubtractSymbole: string = "+";
  constructor() {
    this.calculeBinary = new UntypedFormGroup({
      binaryOne: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
      binaryTwo: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
    });
    this.conveBinaryToDeci = new UntypedFormGroup({
      binary: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
    });
    this.conveDeciToBinary = new UntypedFormGroup({
      decimal: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  get formCalculeBinary() { return this.calculeBinary.controls; }
  get formBinaryDec() { return this.conveBinaryToDeci.controls; }
  get formDecBinary() { return this.conveDeciToBinary.controls; }

  CalculateBinary() {
    this.submitted = true;
    if (this.calculeBinary.valid) {
      this.binaryOne = parseInt(this.calculeBinary.value.binaryOne, 2);
      this.binaryTwo = parseInt(this.calculeBinary.value.binaryTwo, 2);
      //  
      this.binaryOneCal = this.calculeBinary.value.binaryOne;
      this.binaryTwoCal = this.calculeBinary.value.binaryTwo;
      if (this.addOrSubtractSymbole === '+') {
        this.rsltCalBinary = this.binaryOne + this.binaryTwo;
      } if (this.addOrSubtractSymbole === '-') {
        this.rsltCalBinary = this.binaryOne - this.binaryTwo;
      }
      this.rsltCalDecimal = this.rsltCalBinary.toString(2)
    }
  }
  CalculateBinaryToDeci() {
    this.submitted = true;
    if (this.conveBinaryToDeci.valid) {
      this.error = "";
      this.rsltBinary = parseInt(this.conveBinaryToDeci.value.binary, 2);
      console.log(this.rsltBinary);
    } else {
      this.error = "Please check the fields";
    }
  }
  CalculateDeciToBinary() {
    this.submitted = true;
    if (this.conveDeciToBinary.valid) {
      this.error = "";
      this.rsltDecimal = this.conveDeciToBinary.value.decimal;
      this.rsltDecimal = this.rsltDecimal.toString(2)
    } else {
      this.error = "Please check the fields";
    }
  }
  changeSymbole(symbole: any) {
    this.addOrSubtractSymbole = symbole;
  }
  // function toDecimal(v) {
  //   let binary = '';
  //   if(typeof v == 'string') {
  //     binary = v.split();
  //   } else {
  //       binary = v.toString().split();
  //   }
  //   let decimal = 0;
  //   for(let i = 0; i < binary.length; i++) {
  //       decimal = (decimal * 2) + binary[i];
  //   }
  //   return decimal;
  // }
}
