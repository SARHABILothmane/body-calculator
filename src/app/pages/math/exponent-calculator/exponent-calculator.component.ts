import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-exponent-calculator',
  templateUrl: './exponent-calculator.component.html',
  styleUrls: ['./exponent-calculator.component.scss']
})
export class ExponentCalculatorComponent implements OnInit {
  calculeFormExponent!: UntypedFormGroup;
  value!: number;
  exponentValue!: number;
  exponent!: number;
  rsltExponent: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  envirement: boolean = environment.production;
  schema: any;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormExponent = new UntypedFormGroup({
      value: new UntypedFormControl("2", [Validators.required]),
      exponent: new UntypedFormControl("3", [Validators.required]),
    });
  }
  // modelsBmi  = {
  //   age: 0,
  // }
  ngOnInit(): void {
    this.titleService.setTitle("Free online Exponent Calculator - Body Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "Exponent Calculator" },
      { name: 'description', content: "An exponent calculator is a tool that allows you to quickly and easily calculate the value of a number raised to a particular exponent" },
      { property: 'og:title', content: "Free online Exponent Calculator - Body Calculator" },
      { property: 'og:description', content: "An exponent calculator is a tool that allows you to quickly and easily calculate the value of a number raised to a particular exponent" },
      { property: "og:url", content: "https://body-calculator.com/math/exponent-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/exponent-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Exponent Calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/exponent-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2023-01-06",
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
  get formExponent() { return this.calculeFormExponent.controls; }

  public CalculateExponent(e: HTMLElement): void {
    this.submitted = true;
    if (this.calculeFormExponent.valid) {
      this.error = "";
      this.rsltExponent = true;
      this.value = this.calculeFormExponent.value.value;
      this.exponentValue = this.calculeFormExponent.value.exponent;
      this.exponent = this.square(this.value, this.exponentValue)
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
    }
  }

  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }

}
