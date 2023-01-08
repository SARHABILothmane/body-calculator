import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root-calculator',
  templateUrl: './root-calculator.component.html',
  styleUrls: ['./root-calculator.component.scss']
})
export class RootCalculatorComponent implements OnInit {
  calculeFormRoot!: UntypedFormGroup;
  calculeFormRootGeneral !: UntypedFormGroup;
  x!: number;
  n!: number;
  rootValue!: number;
  root!: number;
  rootGeneral!: number;
  rsltRoot: boolean = false;
  rsltRootGenreral: boolean = false;
  error!: string;
  errorNTH!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  schema: any;
  envirement: boolean = environment.production;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormRoot = new UntypedFormGroup({
      root: new UntypedFormControl("4", [Validators.required]),
    });

    this.calculeFormRootGeneral = new UntypedFormGroup({
      x: new UntypedFormControl("2", [Validators.required, Validators.min(0)]),
      n: new UntypedFormControl("3", [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.titleService.setTitle("Free online Root Calculator - Square Root Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "Free online Root Calculator, Square Root Calculator,Nth Root Calculator" },
      { name: 'description', content: "Free online Root Calculator - Square Root Calculator and also you can use Nth Root Calculator" },
      { property: 'og:title', content: "Free online Root Calculator - Square Root Calculator" },
      { property: 'og:description', content: "Free online Root Calculator - Square Root Calculator and also you can use Nth Root Calculator" },
      { property: "og:url", content: "https://body-calculator.com/math/root-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/root-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Random Number Generator RNG",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/root-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2023-01-05",
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
  get formRoot() { return this.calculeFormRoot.controls; }
  get formRootGenerl() { return this.calculeFormRootGeneral.controls; }

  public CalculateRoot(): void {
    this.submitted = true;
    if (this.calculeFormRoot.valid) {
      this.error = "";
      this.rsltRoot = true;
      this.rootValue = this.calculeFormRoot.value.root;
      this.root = Math.sqrt(this.rootValue)

    } else {
      this.error = "Please check the fields";
    }
  }
  public CalculateRootGenral(): void {
    this.submitted = true;
    if (this.calculeFormRootGeneral.valid) {
      this.errorNTH = "";
      this.rsltRootGenreral = true;
      this.n = this.calculeFormRootGeneral.value.n;
      this.x = this.calculeFormRootGeneral.value.x;
      this.rootGeneral = Math.pow(this.x, 1 / this.n);

    } else {
      this.errorNTH = "Please check the fields";
    }
  }
}
