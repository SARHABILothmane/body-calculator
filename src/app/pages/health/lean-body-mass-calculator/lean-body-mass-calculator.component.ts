import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Bmr } from 'src/app/models/bmr';

@Component({
  selector: 'app-lean-body-mass-calculator',
  templateUrl: './lean-body-mass-calculator.component.html',
  styleUrls: ['./lean-body-mass-calculator.component.scss']
})
export class LeanBodyMassCalculatorComponent implements OnInit {
  calculeLbm!: UntypedFormGroup;
  // bmi!: number;
  // lbm!: number;
  // bfm!: string;
  boerLbm!: number;
  jamesLbm!: number;
  humeLbm!: number;
  childLbm!: number;
  boerBf!: number;
  jamesBf!: number;
  humeBf!: number;
  childBf!: number;
  boerBfPer!: number;
  jamesBfPer!: number;
  humeBfPer!: number;
  childBfPer!: number;
  ecv!: number;
  heightCm!: number;
  weightRslt!: number;
  error: string = "";
  submitted = false;
  // message: string = "";
  selectedHeight: string = "cm";
  selectedWeight: string = "kg";
  checked: string = "female";
  switchAdulte = false;
  switchChild = false;

  modelsBmi: Bmr = {
    age: 0,
    height: 0,
    weight: 0,
  };

  constructor() {
    this.calculeLbm = new UntypedFormGroup({
      age: new UntypedFormControl("", [Validators.required, Validators.min(5), Validators.max(100)]),
      height: new UntypedFormControl("", [Validators.required]),
      weight: new UntypedFormControl("", [Validators.required]),
      gender: new UntypedFormControl("female", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  checkedGender(v: any) {
    this.checked = v;
  }
  get formLbm() { return this.calculeLbm.controls; }
  claculteLbm(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeLbm.valid) {
      if (this.calculeLbm.value.age >= 14) {
        this.error = "";
        this.switchAdulte = true;
        this.switchChild = false;
        e.scrollIntoView({ behavior: "smooth" });
        //cm kg
        if (this.checked === 'male') {
          if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.calculeLbm.value.height)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.calculeLbm.value.height;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = ((0.32810 * this.weightRslt) + (0.33929 * this.calculeLbm.value.height)) - 29.5336
            this.selectedHeight = "cm";
            this.selectedWeight = "kg";
          }
          //m kg
          if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            this.heightCm = this.calculeLbm.value.height * 100
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = ((0.32810 * this.weightRslt) + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "m";
            this.selectedWeight = "kg";
          }
          //in kg
          if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = ((0.32810 * this.weightRslt) + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "in";
            this.selectedWeight = "kg";
          }
          //feet kg
          if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = ((0.32810 * this.weightRslt) + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "ft";
            this.selectedWeight = "kg";
          }
          ///////dag
          //cm dag
          if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.calculeLbm.value.height)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.calculeLbm.value.height;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = ((0.32810 * this.weightRslt) + (0.33929 * this.calculeLbm.value.height)) - 29.5336
            this.selectedHeight = "cm";
            this.selectedWeight = "dag";
          }
          //m dag
          if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "m";
            this.selectedWeight = "dag";
          }
          //in dag
          if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "in";
            this.selectedWeight = "dag";
          }
          //feet dag
          if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "ft";
            this.selectedWeight = "dag";
          }
          ///////lb
          //cm dag
          if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = this.calculeLbm.value.height;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "cm";
            this.selectedWeight = "lb";
          }
          //m dag
          if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "m";
            this.selectedWeight = "lb";
          }
          //in lb
          if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "in";
            this.selectedWeight = "lb";
          }
          //feet lb
          if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "ft";
            this.selectedWeight = "lb";
          }
          /////////OZ
          //cm oz
          if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "cm";
            this.selectedWeight = "oz";
          }
          //m oz
          if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "m";
            this.selectedWeight = "oz";
          }
          //in oz
          if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "in";
            this.selectedWeight = "oz";
          }
          //feet oz
          if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.407 * this.weightRslt) + (0.267 * this.heightCm)) - 19.2
            // For males:eLBM = 1.1W - 128(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.1 * this.weightRslt - 128 * (this.square(wh, 2))
            // eLBM = 0.32810*W + 0.33929*H - 29.5336
            this.humeLbm = (0.32810 * this.weightRslt + (0.33929 * this.heightCm)) - 29.5336
            this.selectedHeight = "ft";
            this.selectedWeight = "oz";
          }
          //rslt 
          this.boerBfPer = (this.boerLbm * 100) / this.weightRslt;
          this.jamesBfPer = (this.jamesLbm * 100) / this.weightRslt;
          this.humeBfPer = (this.humeLbm * 100) / this.weightRslt;
          this.boerBf = 100 - this.boerBfPer;
          this.jamesBf = 100 - this.jamesBfPer;
          this.humeBf = 100 - this.humeBfPer;
          Math.floor(this.boerLbm);
          Math.floor(this.jamesLbm);
          Math.floor(this.humeLbm);

        }
        if (this.checked === 'female') {
          if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.calculeLbm.value.height)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.calculeLbm.value.height;
            this.jamesLbm = 1.07 * this.calculeLbm.value.weight - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.calculeLbm.value.height)) - 43.2933
            this.selectedHeight = "cm";
            this.selectedWeight = "kg";
          }
          //m kg
          if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
            this.heightCm = this.calculeLbm.value.height * 100;
            this.weightRslt = this.calculeLbm.value.weight;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "m";
            this.selectedWeight = "kg";
          }
          //in kg
          if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "in";
            this.selectedWeight = "kg";
          }
          //feet kg
          if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
            this.weightRslt = this.calculeLbm.value.weight;
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "ft";
            this.selectedWeight = "kg";
          }
          ///////dag
          //cm dag
          if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.calculeLbm.value.height)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.calculeLbm.value.height;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.calculeLbm.value.height)) - 43.2933
            this.selectedHeight = "cm";
            this.selectedWeight = "dag";
          }
          //m dag
          if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "m";
            this.selectedWeight = "dag";
          }
          //in dag
          if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "in";
            this.selectedWeight = "dag";
          }
          //feet dag
          if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 100;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "ft";
            this.selectedWeight = "dag";
          }
          ///////lb
          //cm dag
          if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = this.calculeLbm.value.height;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "cm";
            this.selectedWeight = "lb";
          }
          //m dag
          if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "m";
            this.selectedWeight = "lb";
          }
          //in lb
          if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "in";
            this.selectedWeight = "lb";
          }
          //feet lb
          if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 2.205;
            this.heightCm = heightRslt * 100
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "ft";
            this.selectedWeight = "lb";
          }
          /////////OZ
          //cm oz
          if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "cm";
            this.selectedWeight = "oz";
          }
          //m oz
          if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = this.calculeLbm.value.height * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "m";
            this.selectedWeight = "oz";
          }
          //in oz
          if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
            let heightRslt = this.calculeLbm.value.height / 39.37;
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "in";
            this.selectedWeight = "oz";
          }
          //feet oz
          if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
            let heightRslt = this.calculeLbm.value.height * 0.3048;
            this.weightRslt = this.calculeLbm.value.weight / 35.274;
            this.heightCm = heightRslt * 100;
            this.boerLbm = ((0.252 * this.weightRslt) + (0.473 * this.heightCm)) - 48.3
            // For males:eLBM = 1.07W - 148(W/H)2
            let wh = this.weightRslt / this.heightCm;
            this.jamesLbm = 1.07 * this.weightRslt - 148 * (this.square(wh, 2))
            // eLBM = 0.29569*W + 0.41813*H - 29.5336
            this.humeLbm = ((0.29569 * this.weightRslt) + (0.41813 * this.heightCm)) - 43.2933
            this.selectedHeight = "ft";
            this.selectedWeight = "oz";
          }
          //rslt 
          this.boerBfPer = (this.boerLbm * 100) / this.weightRslt;
          this.jamesBfPer = (this.jamesLbm * 100) / this.weightRslt;
          this.humeBfPer = (this.humeLbm * 100) / this.weightRslt;
          this.boerBf = 100 - this.boerBfPer;
          this.jamesBf = 100 - this.jamesBfPer;
          this.humeBf = 100 - this.humeBfPer;
          Math.floor(this.boerLbm);
          Math.floor(this.jamesLbm);
          Math.floor(this.humeLbm);
        }
      } else {
        this.error = "";
        this.switchAdulte = false;
        this.switchChild = true;
        e.scrollIntoView({ behavior: "smooth" });
        // eECV = 0.0215·W0.6469·H0.7236
        // (ECV = weight0.6469 × height0.7236 × 0.02154)
        // eLBM = 3.8·eECV
        if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          this.weightRslt = this.calculeLbm.value.weight;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.calculeLbm.value.height, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
          this.weightRslt = this.calculeLbm.value.weight;
          this.heightCm = this.calculeLbm.value.height * 100
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
        //in kg
        if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
          this.weightRslt = this.calculeLbm.value.weight;
          let heightRslt = this.calculeLbm.value.height / 39.37;
          this.heightCm = heightRslt * 100
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "in";
          this.selectedWeight = "kg";
        }
        //feet kg
        if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
          this.weightRslt = this.calculeLbm.value.weight;
          let heightRslt = this.calculeLbm.value.height * 0.3048;
          this.heightCm = heightRslt * 100
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "ft";
          this.selectedWeight = "kg";
        }
        ///////dag
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
          this.weightRslt = this.calculeLbm.value.weight / 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.calculeLbm.value.height, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "cm";
          this.selectedWeight = "dag";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
          this.weightRslt = this.calculeLbm.value.weight / 100;
          this.heightCm = this.calculeLbm.value.height * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "m";
          this.selectedWeight = "dag";
        }
        //in dag
        if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeLbm.value.height / 39.37;
          this.weightRslt = this.calculeLbm.value.weight / 100;
          this.heightCm = heightRslt * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "in";
          this.selectedWeight = "dag";
        }
        //feet dag
        if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeLbm.value.height * 0.3048;
          this.weightRslt = this.calculeLbm.value.weight / 100;
          this.heightCm = heightRslt * 100
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "ft";
          this.selectedWeight = "dag";
        }
        ///////lb
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
          this.weightRslt = this.calculeLbm.value.weight / 2.205;
          this.heightCm = this.calculeLbm.value.height;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "cm";
          this.selectedWeight = "lb";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
          this.weightRslt = this.calculeLbm.value.weight / 2.205;
          this.heightCm = this.calculeLbm.value.height * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "m";
          this.selectedWeight = "lb";
        }
        //in lb
        if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
          this.weightRslt = this.calculeLbm.value.weight / 2.205;
          let heightRslt = this.calculeLbm.value.height / 39.37;
          this.heightCm = heightRslt * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "in";
          this.selectedWeight = "lb";
        }
        //feet lb
        if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeLbm.value.height * 0.3048;
          this.weightRslt = this.calculeLbm.value.weight / 2.205;
          this.heightCm = heightRslt * 100
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "ft";
          this.selectedWeight = "lb";
        }
        /////////OZ
        //cm oz
        if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
          this.weightRslt = this.calculeLbm.value.weight / 35.274;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "cm";
          this.selectedWeight = "oz";
        }
        //m oz
        if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
          this.weightRslt = this.calculeLbm.value.weight / 35.274;
          this.heightCm = this.calculeLbm.value.height * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "m";
          this.selectedWeight = "oz";
        }
        //in oz
        if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeLbm.value.height / 39.37;
          this.weightRslt = this.calculeLbm.value.weight / 35.274;
          this.heightCm = heightRslt * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "in";
          this.selectedWeight = "oz";
        }
        //feet oz
        if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeLbm.value.height * 0.3048;
          this.weightRslt = this.calculeLbm.value.weight / 35.274;
          this.heightCm = heightRslt * 100;
          let w = this.square(this.weightRslt, 0.6469);
          let h = this.square(this.heightCm, 0.7236);
          this.ecv = w * h * 0.02154;
          this.childLbm = 3.8 * this.ecv
          this.selectedHeight = "ft";
          this.selectedWeight = "oz";
        }
        //rslt 
        this.childBfPer = (this.childLbm * 100) / this.weightRslt;
        this.childBf = 100 - this.boerBfPer;
        Math.floor(this.childLbm);
      }
    } else {
      this.error = "Please check the fields";
    }
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsBmi.height = this.calculeLbm.value.height / 100;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsBmi.height = (this.calculeLbm.value.height / 100) * 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeLbm.value.height * 100) / 0.3048;
        this.modelsBmi.height = this.calculeLbm.value.height / 30.48;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsBmi.height = this.calculeLbm.value.height * 100;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeLbm.value.height * 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsBmi.height = this.calculeLbm.value.height / 0.3048;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeLbm.value.height / 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsBmi.height = (this.calculeLbm.value.height * 100) / 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeLbm.value.height / 39.37) / 0.3048;
        this.modelsBmi.height = this.calculeLbm.value.height / 12;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeLbm.value.height * 0.3048;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsBmi.height = (this.calculeLbm.value.height * 100) * 0.3048;
        this.modelsBmi.height = this.calculeLbm.value.height * 30.48;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeLbm.value.height * 12;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
    }
  }
  //
  weightSelect(v: any) {
    //km
    if (this.selectedWeight === "kg") {
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 2.205;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 100;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 35.274;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
    }
    //dag
    if (this.selectedWeight === "dag") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 100;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 45.359;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 2.835;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
    }
    //lb
    if (this.selectedWeight === "lb") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 2.205;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 16;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 45.359;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
    }
    //oz
    if (this.selectedWeight === "oz") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 35.274;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeLbm.value.weight / 16;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeLbm.value.weight * 2.835;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
    }
  }
  //           Lean Body Mass Formula for Adults
  // The Boer Formula:1
  // LBM (men) = 0.407 * weight [kg] + 0.267 * height [cm] - 19.2
  // For females: eLBM = 0.252W + 0.473H - 48.3

  //           The James Formula: 2
  // For males:eLBM = 1.1W - 128(W/H)2
  // For females:eLBM = 1.07W - 148(W/H)	2
  // The Hume Formula:3

  // For males:eLBM = 0.32810*W + 0.33929*H - 29.5336
  // For females: eLBM = 0.29569*W + 0.41813*H - 43.2933

  //           Lean Body Mass Formula for Children
  // The Peters Formula:4

  // The author suggests that this formula is applicable for children aged 13-14 years old or younger. The formula is used to compute an eLBM based on an estimated extracellular volume (eECV) as follows:

  // eECV = 0.0215·W0.6469·H0.7236
  // eLBM = 3.8·eECV
}
