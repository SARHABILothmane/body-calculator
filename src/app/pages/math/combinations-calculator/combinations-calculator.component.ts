import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-combinations-calculator',
  templateUrl: './combinations-calculator.component.html',
  styleUrls: ['./combinations-calculator.component.scss']
})
export class CombinationsCalculatorComponent implements OnInit {
  schema: any;
  calculeFormCombination!: UntypedFormGroup;
  n!: number;
  r!: number;
  combination!: number;
  rsltCombination: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  envirement: boolean = environment.production;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormCombination = new UntypedFormGroup({
      n: new UntypedFormControl("", [Validators.required]),
      r: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {

    this.titleService.setTitle("Free online Combination Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "combination calculator, combination formula, permutation and combination formula, ncr calculator, permutation and combination calculator" },
      { name: 'description', content: "Free online Combination Calculator and Permutation Calculator" },
      { property: 'og:title', content: "Free online Combination Calculator" },
      { property: 'og:description', content: "Free online Combination Calculator and Permutation Calculator" },
      { property: "og:url", content: "https://body-calculator.com/math/combination-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/combination-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Combination Calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/combination-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-12-03",
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
  get formCombination() { return this.calculeFormCombination.controls; }

  public CalculateRandomNumber(e: HTMLElement): void {
    this.submitted = true;
    if (this.calculeFormCombination.valid) {
      if (this.calculeFormCombination.value.r > this.calculeFormCombination.value.n || this.calculeFormCombination.value.n == 0) {
        this.error = "r needs to be smaller than n.";
        return
      }
      this.error = "";
      this.rsltCombination = true;
      this.n = this.calculeFormCombination.value.n;
      this.r = this.calculeFormCombination.value.r;
      let xx = this.factorialize(this.r) * this.factorialize(this.n - this.r)
      this.combination = this.factorialize(this.n) / (xx);
      // this.combination = this.factorialize(this.n) / (this.r * this.factorialize(this.n - this.r));
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
    }
  }

  // with loooop 
  factorialize(num: number) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}
