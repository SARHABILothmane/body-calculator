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
  calculeAddOrSubTime!: UntypedFormGroup;
  checked: string = "add";
  checkedSecondTimeCalculator: string = "add";
  modelsTime: Time = {
    day: '',
    hour: '',
    minute: '',
    second: '',
  };
  modelsAddOrSubTime = {
    startTime: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };
  startTimeDay: any;
  resultTimeSecondCalculator: Date | undefined;
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

    // let startTime = this.StartDate;

    this.calculeAddOrSubTime = new UntypedFormGroup({
      // day: new UntypedFormControl(this.StartDate.getDate(), [Validators.required]),
      startTime: new UntypedFormControl(new Date(), [Validators.required]),
      hour: new UntypedFormControl(new Date().getHours(), [Validators.required]),
      minute: new UntypedFormControl(new Date().getMinutes(), [Validators.required]),
      second: new UntypedFormControl(new Date().getSeconds(), [Validators.required]),
      // dayAddSub: new UntypedFormControl("", [Validators.required]),
      // hourAddSub: new UntypedFormControl("", [Validators.required]),
      // minuteAddSub: new UntypedFormControl("", [Validators.required]),
      // secondAddSub: new UntypedFormControl("", [Validators.required]),
      rsltDay: new UntypedFormControl(0, [Validators.required]),
      rsltHour: new UntypedFormControl(0, [Validators.required]),
      rsltMinute: new UntypedFormControl(0, [Validators.required]),
      rsltSecond: new UntypedFormControl(0, [Validators.required]),
    });
  }


  ngOnInit(): void {
  }

  public CalculateTime(): void {
    let dayResult = 0 ;
    let hourResult = 0 ;
    let minuteResult = 0 ;
    let secondResult = 0 ;
    if (this.checked === "add") {

      if((this.calculeTime.value.second + this.calculeTime.value.secondAddSub) > 59)
      {
        let secondModulo = (this.calculeTime.value.second + this.calculeTime.value.secondAddSub) % 60 ; 
        let addToMinute = Math.floor((this.calculeTime.value.second + this.calculeTime.value.secondAddSub) / 60) ; 
        secondResult +=  secondModulo;
        minuteResult += addToMinute

      }else
      {
        secondResult += this.calculeTime.value.second + this.calculeTime.value.secondAddSub
      }

      if((this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) > 59)
      {
        
        let minuteModulo = (this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) % 60 ; 
        let addToHour = Math.floor((this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) / 60) ; 
        
        minuteResult =  minuteModulo;
        hourResult += addToHour

      }else
      {
        minuteResult += this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub
      }

      if((this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) > 23)
      {
        let hourModulo = (this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) % 24 ; 
        let addToDay = Math.floor((this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) / 24) ;
         
        hourResult =  hourModulo;
        dayResult += addToDay

      }else
      {
        hourResult += this.calculeTime.value.hour + this.calculeTime.value.hourAddSub
      }


      dayResult +=  this.calculeTime.value.day + this.calculeTime.value.dayAddSub;

      this.calculeTime.patchValue({
        rsltDay: dayResult,
        rsltHour: hourResult,
        rsltMinute: minuteResult,
        rsltSecond: secondResult,
      });
    }else{

      if((this.calculeTime.value.second - this.calculeTime.value.secondAddSub) > 59)
      {
        let secondModulo = (this.calculeTime.value.second - this.calculeTime.value.secondAddSub) % 60 ; 
        let addToMinute = Math.floor((this.calculeTime.value.second - this.calculeTime.value.secondAddSub) / 60) ; 
        secondResult +=  secondModulo;
        minuteResult += addToMinute

      }else
      {
        secondResult += this.calculeTime.value.second - this.calculeTime.value.secondAddSub
      }

      if((this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) > 59)
      {
        
        let minuteModulo = (this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) % 60 ; 
        let addToHour = Math.floor((this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) / 60) ; 
        
        minuteResult =  minuteModulo;
        hourResult += addToHour

      }else
      {
        minuteResult += this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub
      }

      if((this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) > 23)
      {
        let hourModulo = (this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) % 24 ; 
        let addToDay = Math.floor((this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) / 24) ;
         
        hourResult =  hourModulo;
        dayResult += addToDay

      }else
      {
        hourResult += this.calculeTime.value.hour - this.calculeTime.value.hourAddSub
      }


      dayResult +=  this.calculeTime.value.day - this.calculeTime.value.dayAddSub;

      this.calculeTime.patchValue({
        rsltDay: dayResult,
        rsltHour: hourResult,
        rsltMinute: minuteResult,
        rsltSecond: secondResult,
      });

    }
  }

  public AddOrSubTime(e: HTMLElement) {


    let newStartDate = new Date(this.calculeAddOrSubTime.value.startTime.setHours(0,0,0,0));
    
    newStartDate.setHours(newStartDate.getHours() + this.calculeAddOrSubTime.value.hour);
    newStartDate.setMinutes(newStartDate.getMinutes() + this.calculeAddOrSubTime.value.minute);
    newStartDate.setSeconds(newStartDate.getSeconds() + this.calculeAddOrSubTime.value.second);

    if (this.checkedSecondTimeCalculator == "add") {
      newStartDate.setDate(newStartDate.getDate() + this.calculeAddOrSubTime.value.rsltDay)
      newStartDate.setHours(newStartDate.getHours() + this.calculeAddOrSubTime.value.rsltHour)
      newStartDate.setMinutes(newStartDate.getMinutes() + this.calculeAddOrSubTime.value.rsltMinute)
      newStartDate.setSeconds(newStartDate.getSeconds() + this.calculeAddOrSubTime.value.rsltSecond)
    } else {
      newStartDate.setDate(newStartDate.getDate() - this.calculeAddOrSubTime.value.rsltDay)
      newStartDate.setHours(newStartDate.getHours() - this.calculeAddOrSubTime.value.rsltHour)
      newStartDate.setMinutes(newStartDate.getMinutes() - this.calculeAddOrSubTime.value.rsltMinute)
      newStartDate.setSeconds(newStartDate.getSeconds() - this.calculeAddOrSubTime.value.rsltSecond)
    }

    this.resultTimeSecondCalculator = newStartDate;
    e.scrollIntoView({ behavior: "smooth" });
  }

  changeSelectedOption(v: any){
    this.checkedSecondTimeCalculator = v;
  }




 checkedTime(v: any) {
    this.checked = v;
  }
  // public CalculateTimee(e: HTMLElement): void {
  //   console.log(this.calculeTime.value.day);
  //   console.log(this.calculeTime.value.dayAddSub);
  //   if (this.checked === "add") {
  //     this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub;
  //     this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub;
  //     if (this.modelsTime.hour > 24) {
  //       this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub + 1;
  //       this.modelsTime.hour = this.modelsTime.hour % 24;
  //     }
  //     this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub;
  //     if (this.modelsTime.minute > 60) {
  //       this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
  //       this.modelsTime.minute = this.modelsTime.minute % 60;
  //     }
  //     this.modelsTime.second = this.calculeTime.value.second + this.calculeTime.value.secondAddSub;
  //     if (this.modelsTime.second > 60) {
  //       this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
  //       this.modelsTime.second = this.modelsTime.second % 60;
  //     }
  //   }
  //   if (this.checked === "substract") {
  //     this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub;
  //     this.modelsTime.hour = this.calculeTime.value.hour - this.calculeTime.value.hourAddSub;
  //     // if (this.modelsTime.hour > 24) {
  //     //   this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub + 1;
  //     //   this.modelsTime.hour = this.modelsTime.hour % 24;
  //     // }
  //     this.modelsTime.minute = this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub;
  //     this.reverseInt(this.modelsTime.minute);
  //     // if (this.modelsTime.minute > 60) {
  //     //   this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
  //     //   this.modelsTime.minute = this.modelsTime.minute % 60;
  //     // }
  //     this.modelsTime.second = this.calculeTime.value.second - this.calculeTime.value.secondAddSub;
  //     // if (this.modelsTime.second > 60) {
  //     //   this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
  //     //   this.modelsTime.second = this.modelsTime.second % 60;
  //     // }
  //   }

  // }
  
  // reverseInt(int: any) {
  //   let intRev = "";
  //   for (let i = 1; i < int.length; i++) {
  //     intRev = int[i] + intRev;
  //   }
  //   intRev = '-' + intRev;
  //   return intRev;
  // }
  // public AddOrSubTime(e: HTMLElement) {
  //   // let startTime = this.startTime.value;
  //   // startTime = new Date(Date.UTC(
  //   //   startTime.getFullYear(),
  //   //   startTime.getMonth(),
  //   //   startTime.getDate(),
  //   //   startTime.getHours(),
  //   //   startTime.getMinutes(),
  //   //   startTime.getSeconds()
  //   // )).toISOString();
  //   // this.startTimeDay = this.startTime.value;
  //   console.log(this.startTime.value);

  //   if (this.checked === "add") {
  //     this.modelsAddOrSubTime.startTime = this.startTime.value.getSeconds()

  //     // this.modelsTime.day = this.startTimeDay + this.calculeAddOrSubTime.value.dayAddSub;
  //     this.modelsAddOrSubTime.hour = this.calculeAddOrSubTime.value.hour + this.startTime.value.getHours();
  //     if (this.modelsAddOrSubTime.hour > 24) {
  //       // this.modelsTime.day = this.calculeAddOrSubTime.value.day + this.calculeAddOrSubTime.value.dayAddSub + 1;
  //       this.modelsAddOrSubTime.hour = this.modelsAddOrSubTime.hour % 24;
  //     }
  //     this.modelsAddOrSubTime.minute = this.calculeAddOrSubTime.value.minute + this.startTime.value.getMinutes();
  //     if (this.modelsAddOrSubTime.minute > 60) {
  //       this.modelsAddOrSubTime.hour = this.calculeAddOrSubTime.value.hour + this.startTime.value.getHours() + 1;
  //       this.modelsAddOrSubTime.minute = this.modelsAddOrSubTime.minute % 60;
  //     }
  //     this.modelsAddOrSubTime.second = this.calculeAddOrSubTime.value.second + this.startTime.value.getSeconds();
  //     if (this.modelsAddOrSubTime.second > 60) {
  //       this.modelsAddOrSubTime.minute = this.calculeAddOrSubTime.value.minute + this.startTime.value.getMinutes() + 1;
  //       this.modelsAddOrSubTime.second = this.modelsAddOrSubTime.second % 60;
  //     }
  //     console.log(this.startTime.value);
  //     let startTime = this.startTime.value;
  //     startTime = new Date(Date.UTC(
  //       startTime.getFullYear(),
  //       startTime.getMonth(),
  //       startTime.getDate(),
  //       startTime.getHours(),
  //       startTime.getMinutes(),
  //       startTime.getSeconds()
  //     )).toISOString();
  //   }
  //   // if (this.checked === "substract") {
  //   //   this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub;
  //   //   this.modelsTime.hour = this.calculeTime.value.hour - this.calculeTime.value.hourAddSub;
  //   //   // if (this.modelsTime.hour > 24) {
  //   //   //   this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub + 1;
  //   //   //   this.modelsTime.hour = this.modelsTime.hour % 24;
  //   //   // }
  //   //   this.modelsTime.minute = this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub;
  //   //   this.reverseInt(this.modelsTime.minute);
  //   //   // if (this.modelsTime.minute > 60) {
  //   //   //   this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
  //   //   //   this.modelsTime.minute = this.modelsTime.minute % 60;
  //   //   // }
  //   //   this.modelsTime.second = this.calculeTime.value.second - this.calculeTime.value.secondAddSub;
  //   //   // if (this.modelsTime.second > 60) {
  //   //   //   this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
  //   //   //   this.modelsTime.second = this.modelsTime.second % 60;
  //   //   // }
  //   // }

  // }
  get startTime() {
    return this.calculeAddOrSubTime.get("startTime") as UntypedFormControl;
  }
}
