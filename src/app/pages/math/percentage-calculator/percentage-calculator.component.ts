import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

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
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorFormTwo!: string;
  errorFormThree!: string;
  errorFormFor!: string;
  submitted: boolean = false;
  submittedFormTwo: boolean = false;
  submittedFormThree: boolean = false;
  submittedFormFor: boolean = false;
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


  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
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
    this.titleService.setTitle("Free online Percentage Calculator - Percent Change Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "Percentage Increase Calculator, percent change calculator, percentage formula , what percentage of, percentage change calculator, percentage difference calculator, percentage increase formula, percentage decrease calculator, how to calculate percentage, how to find percentage, how to calculate percentages, how to calculate percentage increase, how to calculate percentage of a number" },
      { name: 'description', content: "Online Percentage Calculator that allow you to calculate percentage in different situation like Percentage Increase Calculator, Percent Change Calculator" },
      { property: 'og:title', content: "Free online Percentage Calculator - Percent Change Calculator" },
      { property: 'og:description', content: "Online Percentage Calculator that allow you to calculate percentage in different situation like Percentage Increase Calculator, Percentage Decrease Calculator" },
      { property: "og:url", content: "https://body-calculator.com/math/percentage-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/percentage-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "percentage calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/percentage-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-11-13",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "EducationalApplication",
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
  get formPercentageY() { return this.calculePercentageY.controls; }
  get formPercentageX() { return this.calculePercentageX.controls; }
  get formPercentageP() { return this.calculePercentageP.controls; }
  get formPercentageIncDec() { return this.calculePercentageIncDec.controls; }

  CalculatePercentageY(e: HTMLElement) {
    this.submitted = true;
    if (this.calculePercentageY.valid) {
      this.error = "";
      this.rsltY = true;
      this.p = this.calculePercentageY.value.p;
      this.x = this.calculePercentageY.value.x;
      let result = this.p * this.x;
      this.y = result / 100;
      e.scrollIntoView({ behavior: "smooth" });
      // y= x*p//100            what is p% of x? formula
      // p= x*100/y              x is what percent of y? formula
      // y= x*100/p           x is p% of what? formula
      // y= +- 100+P/100  what is x increased/decreased by p% formula
    } else {
      this.error = "Please check the fields";
    }
  }
  CalculatePercentageX(e: HTMLElement) {
    this.submittedFormTwo = true;
    if (this.calculePercentageX.valid) {
      this.errorFormTwo = "";
      this.rsltX = true;
      this.yOne = this.calculePercentageX.value.y;
      this.xOne = this.calculePercentageX.value.x;
      let result = this.xOne * 100;
      this.pOne = result / this.yOne;
      e.scrollIntoView({ behavior: "smooth" });
      // p= x*100/y              x is what percent of y? formula
    } else {
      this.errorFormTwo = "Please check the fields";
    }
  }
  CalculatePercentageP(e: HTMLElement) {
    this.submittedFormThree = true;
    if (this.calculePercentageP.valid) {
      this.errorFormThree = "";
      this.rsltP = true;
      this.pTwo = this.calculePercentageP.value.p;
      this.xTwo = this.calculePercentageP.value.x;
      let result = this.xTwo * 100;
      this.yTwo = result / this.pTwo;
      e.scrollIntoView({ behavior: "smooth" });
      // y= x*100/p           x is p% of what? formula
    } else {
      this.errorFormThree = "Please check the fields";
    }
  }
  CalculatePercentageIncDec(e: HTMLElement) {
    this.submittedFormFor = true;
    if (this.calculePercentageIncDec.valid) {
      this.errorFormFor = "";
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
      e.scrollIntoView({ behavior: "smooth" });
      // y= +- . 100+P/100  what is x increased/decreased by p% formula

    } else {
      this.errorFormFor = "Please check the fields";
    }
  }
  selectPercentage() {
  }
}
