import { Title, Meta } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-percentage-increase-calculator',
  templateUrl: './percentage-increase-calculator.component.html',
  styleUrls: ['./percentage-increase-calculator.component.scss']
})
export class PercentageIncreaseCalculatorComponent implements OnInit {
  calculePercentageIncDec!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorFormTwo!: string;
  errorFormThree!: string;
  errorFormFor!: string;
  submitted: boolean = false;

  submittedFormThree: boolean = false;
  submittedFormFor: boolean = false;

  intialValue!: number;
  finalValue!: number;
  difference!: number;

  rsltIncDec: boolean = false;
  resultIncDec!: number;


  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculePercentageIncDec = new UntypedFormGroup({
      intial: new UntypedFormControl("", [Validators.required]),
      final: new UntypedFormControl("", [Validators.required]),
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
  get formPercentageIncDec() { return this.calculePercentageIncDec.controls; }

  CalculatePercentageIncDec(e: HTMLElement) {
    this.submittedFormFor = true;
    if (this.calculePercentageIncDec.valid) {
      this.errorFormFor = "";
      this.rsltIncDec = true;
      this.intialValue = this.calculePercentageIncDec.value.intial;
      this.finalValue = this.calculePercentageIncDec.value.final;
      // %Increase = 100  * final - intial value /intial value
      this.difference = this.finalValue - this.intialValue
      let intialFinal = this.difference / this.intialValue;
      this.resultIncDec = 100 * intialFinal;
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorFormFor = "Please check the fields";
    }
  }

}
