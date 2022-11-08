import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.scss']
})
export class TimeCalculatorComponent implements OnInit {
  calculeTime!: UntypedFormGroup;
  calculeAddOrSubTime!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
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
  // startTimeDay: any;
  resultTimeSecondCalculator: Date | undefined;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
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


    this.calculeAddOrSubTime = new UntypedFormGroup({
      startTime: new UntypedFormControl(new Date(), [Validators.required]),
      hour: new UntypedFormControl(new Date().getHours(), [Validators.required]),
      minute: new UntypedFormControl(new Date().getMinutes(), [Validators.required]),
      second: new UntypedFormControl(new Date().getSeconds(), [Validators.required]),
      rsltDay: new UntypedFormControl(0, [Validators.required]),
      rsltHour: new UntypedFormControl(0, [Validators.required]),
      rsltMinute: new UntypedFormControl(0, [Validators.required]),
      rsltSecond: new UntypedFormControl(0, [Validators.required]),
    });
  }


  ngOnInit(): void {
    this.titleService.setTitle("Free online time calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "time calculator,calculator time from a date, time calculation,calculate time in excel,how to calculate time,time calculation in calculator,bed time calculator,work time calculator,calculator of time,delay time calculator,time,calculator,bed time calculator for students,time calculation app,how to calculate time,takt time calculation,calculation of time,bed time calculator wake up and go to bed" },
      { name: 'description', content: "Free online age calculator (You may subtract time (discover the time difference), multiply time, divide time, add time, and compute the duration between dates using the time and date calculator.)" },
      { property: 'og:title', content: "Free online time calculator " },
      { property: 'og:description', content: "Free online age calculator (You may subtract time (discover the time difference), multiply time, divide time, add time, and compute the duration between dates using the time and date calculator.)" },
      { property: "og:url", content: "https://body-calculator.com/calculators/time-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/calculators/time-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/calculators/time-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "operatingSystem": "Linux",
      "screenshot": "https://body-calculator.com/assets/images/logo/Screenshot-body-calculator.png",
      "softwareVersion": "1",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "8864"
      },
      "offers": {
        "@type": "Offer",
        "price": "1.00",
        "priceCurrency": "USD"
      }
    };
  }

  public CalculateTime(): void {
    let dayResult = 0;
    let hourResult = 0;
    let minuteResult = 0;
    let secondResult = 0;
    if (this.checked === "add") {

      if ((this.calculeTime.value.second + this.calculeTime.value.secondAddSub) > 59) {
        let secondModulo = (this.calculeTime.value.second + this.calculeTime.value.secondAddSub) % 60;
        let addToMinute = Math.floor((this.calculeTime.value.second + this.calculeTime.value.secondAddSub) / 60);
        secondResult += secondModulo;
        minuteResult += addToMinute

      } else {
        secondResult += this.calculeTime.value.second + this.calculeTime.value.secondAddSub
      }

      if ((this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) > 59) {

        let minuteModulo = (this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) % 60;
        let addToHour = Math.floor((this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + minuteResult) / 60);

        minuteResult = minuteModulo;
        hourResult += addToHour

      } else {
        minuteResult += this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub
      }

      if ((this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) > 23) {
        let hourModulo = (this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) % 24;
        let addToDay = Math.floor((this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + hourResult) / 24);

        hourResult = hourModulo;
        dayResult += addToDay

      } else {
        hourResult += this.calculeTime.value.hour + this.calculeTime.value.hourAddSub
      }


      dayResult += this.calculeTime.value.day + this.calculeTime.value.dayAddSub;

      this.calculeTime.patchValue({
        rsltDay: dayResult,
        rsltHour: hourResult,
        rsltMinute: minuteResult,
        rsltSecond: secondResult,
      });
    } else {

      if ((this.calculeTime.value.second - this.calculeTime.value.secondAddSub) > 59) {
        let secondModulo = (this.calculeTime.value.second - this.calculeTime.value.secondAddSub) % 60;
        let addToMinute = Math.floor((this.calculeTime.value.second - this.calculeTime.value.secondAddSub) / 60);
        secondResult += secondModulo;
        minuteResult += addToMinute

      } else {
        secondResult += this.calculeTime.value.second - this.calculeTime.value.secondAddSub
      }

      if ((this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) > 59) {

        let minuteModulo = (this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) % 60;
        let addToHour = Math.floor((this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub + minuteResult) / 60);

        minuteResult = minuteModulo;
        hourResult += addToHour

      } else {
        minuteResult += this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub
      }

      if ((this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) > 23) {
        let hourModulo = (this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) % 24;
        let addToDay = Math.floor((this.calculeTime.value.hour - this.calculeTime.value.hourAddSub + hourResult) / 24);

        hourResult = hourModulo;
        dayResult += addToDay

      } else {
        hourResult += this.calculeTime.value.hour - this.calculeTime.value.hourAddSub
      }


      dayResult += this.calculeTime.value.day - this.calculeTime.value.dayAddSub;

      this.calculeTime.patchValue({
        rsltDay: dayResult,
        rsltHour: hourResult,
        rsltMinute: minuteResult,
        rsltSecond: secondResult,
      });

    }
  }

  public AddOrSubTime(e: HTMLElement) {

    let newStartDate = new Date(this.calculeAddOrSubTime.value.startTime.setHours(0, 0, 0, 0));

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

  changeSelectedOption(v: any) {
    this.checkedSecondTimeCalculator = v;
  }

  checkedTime(v: any) {
    this.checked = v;
  }

  // get startTime() {
  //   return this.calculeAddOrSubTime.get("startTime") as UntypedFormControl;
  // }
}
