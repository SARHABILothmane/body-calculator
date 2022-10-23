import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hex-calculator',
  templateUrl: './hex-calculator.component.html',
  styleUrls: ['./hex-calculator.component.scss']
})
export class HexCalculatorComponent implements OnInit {
  calculeHex!: UntypedFormGroup;
  conveHexToDeci!: UntypedFormGroup;
  conveDeciToHex!: UntypedFormGroup;
  error!: string;
  submitted: boolean = false;
  rsltHex!: any;
  rsltDecimal!: any;
  rsltDecimalBinary!: any;
  hexOne!: any;
  hexTwo!: any;
  hexOneCal!: any;
  hexTwoCal!: any;
  rsltCalHex!: number;
  rsltCalDecimal!: string;
  addOrSubtractSymbole: string = "+";
  constructor() {
    this.calculeHex = new UntypedFormGroup({
      hexOne: new UntypedFormControl("", [Validators.required]),
      hexTwo: new UntypedFormControl("", [Validators.required]),
    });
    this.conveHexToDeci = new UntypedFormGroup({
      hex: new UntypedFormControl("", [Validators.required]),
    });
    this.conveDeciToHex = new UntypedFormGroup({
      decimal: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  get formCalculeHex() { return this.calculeHex.controls; }
  get formHexDec() { return this.conveHexToDeci.controls; }
  get formDecHex() { return this.conveDeciToHex.controls; }

  CalculateHex() {
    this.submitted = true;
    if (this.calculeHex.valid) {
      this.hexOne = parseInt(this.calculeHex.value.hexOne, 16);
      this.hexTwo = parseInt(this.calculeHex.value.hexTwo, 16);
      //  
      this.hexOneCal = this.calculeHex.value.hexOne;
      this.hexTwoCal = this.calculeHex.value.hexTwo;
      if (this.addOrSubtractSymbole === '+') {
        this.rsltCalHex = this.hexOne + this.hexTwo;
      } if (this.addOrSubtractSymbole === '-') {
        this.rsltCalHex = this.hexOne - this.hexTwo;
      }
      this.rsltCalDecimal = this.rsltCalHex.toString(16)
    }
  }
  CalculateHexToDeci() {
    this.submitted = true;
    if (this.conveHexToDeci.valid) {
      this.rsltHex = parseInt(this.conveHexToDeci.value.hex, 16);
      console.log(this.rsltHex);

    }
  }
  CalculateDeciToHex() {
    this.submitted = true;
    if (this.conveDeciToHex.valid) {
      this.rsltDecimal = this.conveDeciToHex.value.decimal;
      this.rsltDecimal = this.rsltDecimal.toString(16)
    }
  }
  changeSymbole(symbole: any) {
    this.addOrSubtractSymbole = symbole;
  }

}
