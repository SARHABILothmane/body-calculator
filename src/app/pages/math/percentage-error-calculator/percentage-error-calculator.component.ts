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
    this.titleService.setTitle("Free online Percent Error Calculator - Percent Error Formula");
    this.metaService.addTags([
      { name: 'keywords', content: "percent error,percent error calculator,how to calculate percent error,percent error formula, how to find percent error, " },
      { name: 'description', content: "Free online Percent Error Calculator with Percent Error Formula" },
      { property: 'og:title', content: "Free online Percent Error Calculator - Percent Error Formula" },
      { property: 'og:description', content: "Free online Percent Error Calculator with Percent Error Formula" },
      { property: "og:url", content: "https://body-calculator.com/math/percent-error-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/percent-error-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/percent-error-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-11-13",
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

  convertToPositiveNumber(value: number){
    return Math.abs(value);
  }
}
