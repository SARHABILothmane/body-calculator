import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-percentage-error-calculator',
  templateUrl: './percentage-error-calculator.component.html',
  styleUrls: ['./percentage-error-calculator.component.scss']
})
export class PercentageErrorCalculatorComponent implements OnInit {
  calculePercentageError!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  submitted: boolean = false;
  rsltError!: number;
  valueX!: number;
  valueY!: number;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculePercentageError = new UntypedFormGroup({
      observed: new UntypedFormControl("", [Validators.required]),
      true: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Percent Error Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "percent error,percent error calculator,error,how to calculate percent error,percent error formula,percent,percentage error,why should you use the percent error calculator,calculate percent error,mean error calculator,percent error calculation,calculating percent error,relative error calculator,mean absolute percentage error calculator,relative error,rounding error on scientific calculator,what is percent error,percent error explanation" },
      { name: 'description', content: "Free online Percent Error Calculator. Let's use this calculator to figure out how much difference there is between your estimate and the actual number. Rather than computing a number each time, we frequently choose to guess it. We created this percent mistake calculator for you, and it will enhance your calculations and estimations. When you've previously utilized the projected value in complex computations, this percent error calculator comes in useful." },
      { property: 'og:title', content: "Free online Percent Error Calculator" },
      { property: 'og:description', content: "Free online Percent Error Calculator. Let's use this calculator to figure out how much difference there is between your estimate and the actual number. Rather than computing a number each time, we frequently choose to guess it. We created this percent mistake calculator for you, and it will enhance your calculations and estimations. When you've previously utilized the projected value in complex computations, this percent error calculator comes in useful." },
      { property: "og:url", content: "https://body-calculator.com/math/percentage-error-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/percentage-error-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/percentage-error-calculator/",
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
