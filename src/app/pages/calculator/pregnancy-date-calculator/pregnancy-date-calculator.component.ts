import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pregnancy-date-calculator',
  templateUrl: './pregnancy-date-calculator.component.html',
  styleUrls: ['./pregnancy-date-calculator.component.scss']
})
export class PregnancyDateCalculatorComponent implements OnInit {
  calculePregnancy!: UntypedFormGroup;
  rsltPregnancy!: Date;
  // rsltPregnancyLastPeriod!: Date;
  pregnancyDays: number = 0;
  pregnancyMonths: number = 0;
  month: number = 0;
  monthF: number = 0;
  // year: number = 0;
  week: number = 0;
  weekF: number = 0;
  day: number | string = 0;
  dayF: number = 0;
  dayW: number = 0;
  hours: number | string = 0;
  minute: number | string = 0;
  second: number | string = 0;
  progressPercent: number = 0;
  // public age!: number;
  checkForm: boolean = false;
  error: string = "";
  envirement: boolean = environment.production;
  schema: any;
  submitted = false;
  submittedDue = false;
  submittedLast = false;
  showTable = false;
  submittedConception = false;
  checkdSymbole: string = "due";
  daysSub: number = 0;
  firstDayWeek1!: Date;
  lastDayDayWeek1!: Date;
  firstDayWeek2!: Date;
  lastDayDayWeek2!: Date;
  arrOfWeekF: any = [];
  arrOfWeekL: any = [];
  dateNow = new Date();
  indexOfDateNow!: number;

  length = 42; // user defined length
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculePregnancy = new UntypedFormGroup({
      // birthday: new UntypedFormControl("", [Validators.required]),
      pregnancy: new UntypedFormControl(new Date(), [Validators.required]),
      dueDate: new UntypedFormControl('28', [Validators.required, Validators.min(20), Validators.max(44)]),
    });
  }
  ngOnInit(): void {
    this.titleService.setTitle("Free online age calculator by date of birth");
    this.metaService.addTags([
      { name: 'keywords', content: "age calculator, date of birth calculator, birthday calculator, chronological age calculator, life expectancy calculator, calculate age from date of birth, age calculator by date of birth, age calculator pearson" },
      { name: 'description', content: "Free online age calculator (chronological age calculator, calculate age from date of birth, age calculator by date of birth, date of birth calculator)" },
      { property: 'og:title', content: "Free online age calculator by date of birth" },
      { property: 'og:description', content: "Free online age calculator (chronological age calculator, calculate age from date of birth, age calculator by date of birth, date of birth calculator)" },
      { property: "og:url", content: "https://body-calculator.com/calculators/age-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/calculators/age-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/calculators/age-calculator/",
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

  get formPregnancy() { return this.calculePregnancy.controls; }
  CalculatePregnancy(e: HTMLElement) {
    this.submitted = true;
    if (this.calculePregnancy.valid) {
      this.error = "";
      this.rsltPregnancy = new Date(this.calculePregnancy.value.pregnancy.toISOString());
      let due = 28 - this.calculePregnancy.value.dueDate;
      this.rsltPregnancy.setFullYear(this.rsltPregnancy.getFullYear());
      this.rsltPregnancy.setMonth(this.rsltPregnancy.getMonth());
      this.rsltPregnancy.setDate(this.rsltPregnancy.getDate());

      if (this.checkdSymbole === 'due') {
        this.arrOfWeekL = [];
        this.arrOfWeekF = [];
        this.showTable = true;
        this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() - (38 * 7));
        // this.pregnancyDays = 280 - this.daysDiff(dateNow, this.rsltPregnancy) - due;
        // let dueDate = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        this.daysSub = this.daysDiff(this.rsltPregnancy, this.dateNow) + 14;
        this.month = Math.floor(this.daysSub / 31);
        this.dayF = this.daysSub - (this.month * 31);
        this.week = Math.floor(this.daysSub / 7);
        this.dayW = this.daysSub - (this.week * 7);

        let x = new Date(this.rsltPregnancy);
        x.setDate(x.getDate() - 13);
        let last = new Date(this.rsltPregnancy);
        last.setDate(last.getDate() + (40 * 7));
        for (let q = x; q <= last; q.setDate(q.getDate() + 7)) {
          this.arrOfWeekF.push(new Date(q));
        }
        let f = new Date(this.rsltPregnancy);
        f.setDate(f.getDate() - 7)
        for (let l = f; l <= last; l.setDate(l.getDate() + 7)) {
          this.arrOfWeekL.push(new Date(l));
        }
        let dd = new Date();
        // dd.setDate(dd.getDate() - 7)
        this.indexOfDateNow = this.arrOfWeekL.findIndex((date: any) =>
          date === dd,
        );


      }
      if (this.checkdSymbole === 'last') {
        this.showTable = true;
        this.arrOfWeekL = [];
        this.arrOfWeekF = [];
        let pregnancyRLast = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        pregnancyRLast.setDate(pregnancyRLast.getDate() - due);
        this.daysSub = this.daysDiff(pregnancyRLast, this.dateNow) - due;
        // this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() - due);
        let progress = this.daysSub * 100 / 280;
        this.progressPercent = Math.floor(progress)
        this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() + (40 * 7) - due);
        this.pregnancyDays = 280 - this.daysDiff(this.dateNow, this.rsltPregnancy) - due;
        // this.daysSub = this.daysDiff(this.rsltPregnancy, this.dateNow) + 14;
        // this.month = Math.floor(this.daysSub / 31);
        // this.dayF = this.daysSub - (this.month * 31);
        // this.week = Math.floor(this.daysSub / 7);
        // this.dayW = this.daysSub - (this.week * 7);

        this.firstDayWeek1 = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        this.firstDayWeek1.setDate(this.firstDayWeek1.getDate() + 1)
        this.lastDayDayWeek1 = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        this.lastDayDayWeek1.setDate(this.lastDayDayWeek1.getDate() + (42 * 7));
        // this.lastDayDayWeek1 = new Date(this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() + 7));
        for (let q = this.firstDayWeek1; q <= this.lastDayDayWeek1; q.setDate(q.getDate() + 7)) {
          this.arrOfWeekF.push(new Date(q));
        }

        let f = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        f.setDate(f.getDate() + 7)
        for (let l = f; l <= this.lastDayDayWeek1; l.setDate(l.getDate() + 7)) {
          this.arrOfWeekL.push(new Date(l));
        }
        this.indexOfDateNow = this.arrOfWeekL.findIndex(
          (date: Date) =>
            date.toDateString() === new Date().toDateString(),
        );

      }

      if (this.checkdSymbole === 'conception') {
        this.showTable = true;
        this.arrOfWeekL = [];
        this.arrOfWeekF = [];
        let pregnancyRLast = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        pregnancyRLast.setDate(pregnancyRLast.getDate() - due);
        this.daysSub = this.daysDiff(pregnancyRLast, this.dateNow) - due;
        // this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() - due);
        let progress = this.daysSub * 100 / 280;
        this.progressPercent = Math.floor(progress)
        this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() + (120) - due);
        this.pregnancyDays = 280 - this.daysDiff(this.dateNow, this.rsltPregnancy) - due;
        this.daysSub = this.pregnancyDays
        this.month = Math.floor(this.daysSub / 31);
        this.dayF = this.daysSub - (this.month * 31);
        this.week = Math.floor(this.daysSub / 7);
        this.dayW = this.daysSub - (this.week * 7);


        this.firstDayWeek1 = new Date(this.rsltPregnancy);
        this.firstDayWeek1.setDate(this.firstDayWeek1.getDate() - 279)
        this.lastDayDayWeek1 = new Date(this.calculePregnancy.value.pregnancy.toISOString());
        this.lastDayDayWeek1.setDate(this.lastDayDayWeek1.getDate() + (134));
        // this.lastDayDayWeek1 = new Date(this.rsltPregnancy.setDate(this.rsltPregnancy.getDate() + 7));
        for (let q = this.firstDayWeek1; q <= this.lastDayDayWeek1; q.setDate(q.getDate() + 7)) {
          this.arrOfWeekF.push(new Date(q));
        }

        let f = new Date(this.rsltPregnancy);
        let last = new Date(this.lastDayDayWeek1);
        f.setDate(f.getDate() - 273)
        last.setDate(last.getDate() + 1)
        for (let l = f; l <= last; l.setDate(l.getDate() + 7)) {
          this.arrOfWeekL.push(new Date(l));
        }
        this.indexOfDateNow = this.arrOfWeekL.findIndex(
          (date: Date) =>
            date.toDateString() === new Date().toDateString(),
        );

      }



      // this.month = Math.floor(this.daysSub / 30);
      // this.dayF = this.daysSub - (this.month * 30);
      // this.week = Math.floor(this.daysSub / 7);
      // this.dayW = this.daysSub - (this.week * 7);
      // if (this.daysDiff(dateNow, this.rsltPregnancy) > 280) {
      //   this.error = "Date was more than 9 months (280 days) ago. This tool only works up to 40 weeks of pregnancy. Please enter a date within the last 40 weeks.";
      //   return;
      // }
      this.checkForm = true;
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
      this.checkForm = false;
    }
  }

  yearsDiff(d1: Date, d2: Date) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }



  daysDiff(d1: Date, d2: Date) {
    let hours = this.hoursDiff(d1, d2);
    let daysDiff = Math.floor(hours / 24);
    this.day = daysDiff.toLocaleString().split(/\s/).join(',');

    return daysDiff;
  }

  hoursDiff(d1: Date, d2: Date) {
    let minutes = this.minutesDiff(d1, d2);
    let hoursDiff = Math.floor(minutes / 60);
    this.hours = hoursDiff.toLocaleString().split(/\s/).join(',');

    return hoursDiff;
  }


  minutesDiff(d1: Date, d2: Date) {
    let seconds = this.secondsDiff(d1, d2);
    let minutesDiff = Math.floor(seconds / 60);
    this.minute = minutesDiff.toLocaleString().split(/\s/).join(',');

    return minutesDiff;
  }

  secondsDiff(d1: any, d2: any) {
    // nrod les times 3la 7sab montasaf lil 
    let millisecondDiff = new Date(d2).setHours(0, 0, 0, 0) - new Date(d1).setHours(0, 0, 0, 0);
    // let secDiff = Math.floor( ( d2 - d1) / 1000 );
    let secDiff = millisecondDiff / 1000;
    this.second = secDiff.toLocaleString().split(/\s/).join(',');

    return secDiff;
  }
  changeSymbole(symbole: any) {
    this.checkdSymbole = symbole;
    if (this.checkdSymbole === 'due') { this.submittedLast = false; };
    if (this.checkdSymbole === 'last') { this.submittedLast = true; };
    if (this.checkdSymbole === 'conception') { this.submittedLast = false };

  }

}


