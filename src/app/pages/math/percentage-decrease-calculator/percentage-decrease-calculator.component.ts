import { Title, Meta } from '@angular/platform-browser';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-percentage-decrease-calculator',
  templateUrl: './percentage-decrease-calculator.component.html',
  styleUrls: ['./percentage-decrease-calculator.component.scss']
})
export class PercentageDecreaseCalculatorComponent implements OnInit {

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
  resultDec!: number;
  resultInc!: number;


  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculePercentageIncDec = new UntypedFormGroup({
      intial: new UntypedFormControl("", [Validators.required]),
      final: new UntypedFormControl("", [Validators.required]),
    });
  }


  ngOnInit(): void {
    this.titleService.setTitle("Percentage Decrease Calculator, Reduce Percentage Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "Percentage Decrease Calculator, Reduce Percentage Calculator, percentage decrease formula, how to calculate percentage decrease, how to work out percentage decrease, how to find percentage decrease" },
      { name: 'description', content: "Free online Percentage Decrease Calculator - how to find percentage decrease?" },
      { property: 'og:title', content: "Percentage Decrease Calculator, Reduce Percentage Calculator" },
      { property: 'og:description', content: "Free online Percentage Decrease Calculator - how to find percentage decrease?" },
      { property: "og:url", content: "https://body-calculator.com/math/percentage-decrease-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/percentage-decrease-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "percentage decrease calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/percentage-decrease-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2023-01-04",
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
      this.difference = this.intialValue - this.finalValue
      let intialFinal = this.difference / this.intialValue;
      this.resultDec = 100 * intialFinal;

      this.difference = this.finalValue - this.intialValue
      let intialF = this.difference / this.intialValue;
      this.resultInc = 100 * intialF;
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorFormFor = "Please check the fields";
    }
  }

}
