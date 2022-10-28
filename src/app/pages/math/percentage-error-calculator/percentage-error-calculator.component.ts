import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-percentage-error-calculator',
  templateUrl: './percentage-error-calculator.component.html',
  styleUrls: ['./percentage-error-calculator.component.scss']
})
export class PercentageErrorCalculatorComponent implements OnInit {
  calculePercentageError!: UntypedFormGroup;
  error!: string;
  submitted: boolean = false;
  rsltError!: number;
  valueX!: number;
  valueY!: number;
  constructor() {
    this.calculePercentageError = new UntypedFormGroup({
      observed: new UntypedFormControl("", [Validators.required]),
      true: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  get formPercentageError() { return this.calculePercentageError.controls; }

  CalculatePercentageError() {
    this.submitted = true;
    if (this.calculePercentageError.valid) {
      this.error = "";
      this.valueX = this.calculePercentageError.value.observed
      this.valueY = this.calculePercentageError.value.true
      let rslt = (this.valueX - this.valueY) / this.valueY
      this.rsltError = rslt * 100;
    } else {
      this.error = "Please check the fields";
    }
  }
}
