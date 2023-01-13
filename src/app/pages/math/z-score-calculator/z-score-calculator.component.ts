import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-z-score-calculator',
  templateUrl: './z-score-calculator.component.html',
  styleUrls: ['./z-score-calculator.component.scss']
})
export class ZScoreCalculatorComponent implements OnInit {
  calculeZscore!: UntypedFormGroup;
  calculeProbabilityZscore!: UntypedFormGroup;
  converterProbabilityZscore!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorProbability!: string;
  errorProbabilityZscore!: string;
  submitted: boolean = false;
  rsltZScore!: number;
  rawScore!: number;
  population!: number;
  deviation!: number;
  ZTable!: number;
  Px!: number;
  Pu!: number;
  z1!: number;
  z2!: number;
  ztable1!: number;
  ztable2!: number;
  px2!: number;
  rsltProbabilityZScore!: number;
  probaBetween!: number;
  //
  ztableConverter!: number;
  pinferieur!: number;
  psuperieur!: number;
  pbetweenZero!: number;
  pbetweenInSup!: number;
  z!: number;

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeZscore = new UntypedFormGroup({
      rawScore: new UntypedFormControl(10, [Validators.required]),
      population: new UntypedFormControl(6, [Validators.required]),
      deviation: new UntypedFormControl(4, [Validators.required]),
    });
    this.calculeProbabilityZscore = new UntypedFormGroup({
      z1: new UntypedFormControl(-1, [Validators.required]),
      z2: new UntypedFormControl(0, [Validators.required]),
    });
    this.converterProbabilityZscore = new UntypedFormGroup({
      zScore: new UntypedFormControl(2, [Validators.required]),
      pinferieur: new UntypedFormControl(0, [Validators.required]),
      psuperieur: new UntypedFormControl(0, [Validators.required]),
      pbetweenZero: new UntypedFormControl(0, [Validators.required]),
      pbetweenInSup: new UntypedFormControl(0, [Validators.required]),
      pOr: new UntypedFormControl(0, [Validators.required]),
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
      "name": "percent error calculator",
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
  get formZscore() { return this.calculeZscore.controls; }
  get formProbabilityZscore() { return this.calculeProbabilityZscore.controls; }
  get formConverterProbabilityZscore() { return this.converterProbabilityZscore.controls; }

  CalculateZscore(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeZscore.valid) {
      this.error = "";
      this.rawScore = this.calculeZscore.value.rawScore
      this.population = this.calculeZscore.value.population
      this.deviation = this.calculeZscore.value.deviation
      let rslt = this.rawScore - this.population
      this.rsltZScore = rslt / this.deviation;
      this.ZTable = this.GetZPercent(this.rsltZScore);
      this.Px = 1 - this.ZTable;
      this.Pu = this.ZTable - 0.5;

      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
    }
  }
  ZscoreProbabilityConverter(e: HTMLElement) {
    // let z = 2;
    // let ztableConverter = this.GetZPercent(z);
    // let px = 1 - ztableConverter pinfer
    // let pu = ztableConverter - 0.5 psup
    // let pn = ztableConverter - px
    // let pb = 1 - pn
    this.submitted = true;
    if (this.converterProbabilityZscore.valid) {
      this.errorProbabilityZscore = "";
      this.z = this.converterProbabilityZscore.value.zScore;
      this.ztableConverter = this.GetZPercent(this.z);
      this.pinferieur = 1 - this.ztableConverter;
      this.psuperieur = this.ztableConverter - 0.5;
      this.pbetweenInSup = this.ztableConverter - this.pinferieur;
      this.pbetweenZero = 1 - this.pbetweenInSup;

      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorProbability = "Please check the fields";
    }


  }
  CalculateProbabilityZscore(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeProbabilityZscore.valid) {
      // const normdist = require('normdist');
      this.errorProbability = "";
      this.z1 = this.calculeProbabilityZscore.value.z1
      this.z2 = this.calculeProbabilityZscore.value.z2
      // if (this.z1 > this.z2) {
      //   this.z1 = this.calculeProbabilityZscore.value.z2
      //   this.z2 = this.calculeProbabilityZscore.value.z1
      // }
      this.ztable1 = this.GetZPercent(this.z1); //P(x<Z1) = 0.84134 =>
      this.ztable2 = this.GetZPercent(this.z2); //P(x>Z2) = 0.02275 => let px2 = 1 - ztable2;
      this.px2 = 1 - this.ztable2;
      this.probaBetween = this.ztable1 + this.px2 //P(x<1 or x>2) = 0.86409
      this.rsltProbabilityZScore = this.ztable2 - this.ztable1//P(1<x<2) = 0.13591
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorProbability = "Please check the fields";
    }
  }

  GetZPercent(z: any) {
    // z == number of standard deviations from the mean

    // if z is greater than 6.5 standard deviations from the mean the
    // number of significant digits will be outside of a reasonable range

    if (z < -6.5) {
      return 0.0;
    }

    if (z > 6.5) {
      return 1.0;
    }

    var factK = 1;
    var sum = 0;
    var term = 1;
    var k = 0;
    var loopStop = Math.exp(-23);

    while (Math.abs(term) > loopStop) {
      term = .3989422804 * Math.pow(-1, k) * Math.pow(z, k) / (2 * k + 1) / Math.pow(2, k) * Math.pow(z, k + 1) / factK;
      sum += term;
      k++;
      factK *= k;
    }

    sum += 0.5;

    return sum;
  }

}
