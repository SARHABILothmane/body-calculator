import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time';

@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.scss']
})
export class TimeCalculatorComponent implements OnInit {
  calculeTime!: UntypedFormGroup;
  checked: string = "";
  modelsTime: Time = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };
  constructor() {
    this.calculeTime = new UntypedFormGroup({
      day: new UntypedFormControl("", [Validators.required]),
      hour: new UntypedFormControl("", [Validators.required]),
      minute: new UntypedFormControl("", [Validators.required]),
      second: new UntypedFormControl("", [Validators.required]),
      dayAddSub: new UntypedFormControl("", [Validators.required]),
      hourAddSub: new UntypedFormControl("", [Validators.required]),
      minuteAddSub: new UntypedFormControl("", [Validators.required]),
      secondAddSub: new UntypedFormControl("", [Validators.required]),
      rsltDay: new UntypedFormControl("", [Validators.required]),
      rsltHour: new UntypedFormControl("", [Validators.required]),
      rsltMinute: new UntypedFormControl("", [Validators.required]),
      rsltSecond: new UntypedFormControl("", [Validators.required]),
    });
  }


  ngOnInit(): void {
  }
  public CalculateTime(e: HTMLElement): void {
    console.log(this.calculeTime.value.day);
    console.log(this.calculeTime.value.dayAddSub);
    if (this.checked === "add") {
      this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub;
      this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub;
      if (this.modelsTime.hour > 24) {
        this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub + 1;
        this.modelsTime.hour = this.modelsTime.hour % 24;
      }
      this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub;
      if (this.modelsTime.minute > 60) {
        this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
        this.modelsTime.minute = this.modelsTime.minute % 60;
      }
      this.modelsTime.second = this.calculeTime.value.second + this.calculeTime.value.secondAddSub;
      if (this.modelsTime.second > 60) {
        this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
        this.modelsTime.second = this.modelsTime.second % 60;
      }
    }
    if (this.checked === "substract") {
      this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub;
      this.modelsTime.hour = this.calculeTime.value.hour - this.calculeTime.value.hourAddSub;
      // if (this.modelsTime.hour > 24) {
      //   this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub + 1;
      //   this.modelsTime.hour = this.modelsTime.hour % 24;
      // }
      this.modelsTime.minute = this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub;
      this.reverseInt(this.modelsTime.minute);
      // if (this.modelsTime.minute > 60) {
      //   this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
      //   this.modelsTime.minute = this.modelsTime.minute % 60;
      // }
      this.modelsTime.second = this.calculeTime.value.second - this.calculeTime.value.secondAddSub;
      // if (this.modelsTime.second > 60) {
      //   this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
      //   this.modelsTime.second = this.modelsTime.second % 60;
      // }
    }

  }
  checkedTime(v: any) {
    this.checked = v;
    console.log(this.checked);
  }
  reverseInt(int: any) {
    let intRev = "";
    for (let i = 1; i < int.length; i++) {
      intRev = int[i] + intRev;
    }
    intRev = '-' + intRev;
    return intRev;
  }
}
