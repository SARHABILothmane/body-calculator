import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-calculator',
  templateUrl: './root-calculator.component.html',
  styleUrls: ['./root-calculator.component.scss']
})
export class RootCalculatorComponent implements OnInit {
  calculeFormRoot!: UntypedFormGroup;
  calculeFormRootGeneral !: UntypedFormGroup;
  x!: number;
  n!: number;
  rootValue!: number;
  root!: number;
  rootGeneral!: number;
  rsltRoot: boolean = false;
  rsltRootGenreral: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  constructor() {
    this.calculeFormRoot = new UntypedFormGroup({
      root: new UntypedFormControl("3", [Validators.required]),
    });

    this.calculeFormRootGeneral = new UntypedFormGroup({
      x: new UntypedFormControl("2", [Validators.required, Validators.min(0)]),
      n: new UntypedFormControl("3", [Validators.required]),
    });
  }
  ngOnInit(): void {

  }
  get formRoot() { return this.calculeFormRoot.controls; }
  get formRootGenerl() { return this.calculeFormRootGeneral.controls; }

  public CalculateRoot(): void {
    this.submitted = true;
    if (this.calculeFormRoot.valid) {
      this.error = "";
      this.rsltRoot = true;
      this.rootValue = this.calculeFormRoot.value.root;
      this.root = Math.sqrt(this.rootValue)

    } else {
      this.error = "Please check the fields";
    }
  }
  public CalculateRootGenral(): void {
    this.submitted = true;
    if (this.calculeFormRootGeneral.valid) {
      this.error = "";
      this.rsltRootGenreral = true;
      this.n = this.calculeFormRootGeneral.value.n;
      this.x = this.calculeFormRootGeneral.value.x;
      this.rootGeneral = Math.pow(this.x, 1 / this.n);

    } else {
      this.error = "Please check the fields";
    }
  }
}
