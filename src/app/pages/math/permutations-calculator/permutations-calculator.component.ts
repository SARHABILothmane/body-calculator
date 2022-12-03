import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-permutations-calculator',
  templateUrl: './permutations-calculator.component.html',
  styleUrls: ['./permutations-calculator.component.scss']
})
export class PermutationsCalculatorComponent implements OnInit {
  schema: any;
  calculeFormPermutation!: UntypedFormGroup;
  n!: number;
  r!: number;
  permutation!: number;
  rsltPermutation: boolean = false;
  error!: string;
  // errorSecondGnerator!: string;
  submitted: boolean = false;
  envirement: boolean = environment.production;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormPermutation = new UntypedFormGroup({
      n: new UntypedFormControl("", [Validators.required]),
      r: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Permutation Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "permutation calculator, permutation and combination formula, permutations formula, permutation and combination calculator, permutation combination formula" },
      { name: 'description', content: "Free online Permutation Calculator and Combination Calculator" },
      { property: 'og:title', content: "Free online Permutation Calculator" },
      { property: 'og:description', content: "Free online Permutation Calculator and Combination Calculator" },
      { property: "og:url", content: "https://body-calculator.com/math/permutation-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/permutation-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Permutation Calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/permutation-calculator/",
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
  get formPermutation() { return this.calculeFormPermutation.controls; }

  public CalculateRandomNumber(e: HTMLElement): void {
   
    this.submitted = true;
    if (this.calculeFormPermutation.valid) {
      if(this.calculeFormPermutation.value.r > this.calculeFormPermutation.value.n || this.calculeFormPermutation.value.n == 0){
        this.error = "r needs to be smaller than n.";
        return
      }
      // Permutations, nPr =  6! / (6 - 2)! = 	30
      this.error = "";
      this.rsltPermutation = true;
      this.n = this.calculeFormPermutation.value.n;
      this.r = this.calculeFormPermutation.value.r;
      this.permutation = this.factorialize(this.n) / this.factorialize(this.n - this.r)
      e.scrollIntoView({ behavior: "smooth" });

    } else {
      this.error = "Please check the fields";
    }
  }

  // factorialize(num: number) {
  //   if (num < 0) 
  //         return -1;
  //   else if (num == 0) 
  //       return 1;
  //   else {
  //       return (num * this.factorialize(num - 1));
  //   }
  // }
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
