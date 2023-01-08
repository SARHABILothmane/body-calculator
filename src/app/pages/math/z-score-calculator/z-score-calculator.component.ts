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
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorProbability!: string;
  submitted: boolean = false;
  rsltZScore!: number;
  rawScore!: number;
  population!: number;
  deviation!: number;
  rsltProbabilityZScore!: number;
  z1!: number;
  z2!: number;

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeZscore = new UntypedFormGroup({
      rawScore: new UntypedFormControl("", [Validators.required]),
      population: new UntypedFormControl("", [Validators.required]),
      deviation: new UntypedFormControl("", [Validators.required]),
    });
    this.calculeProbabilityZscore = new UntypedFormGroup({
      z1: new UntypedFormControl("", [Validators.required]),
      z2: new UntypedFormControl("", [Validators.required]),
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

  CalculateZscore(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeZscore.valid) {
      this.error = "";
      this.rawScore = this.calculeZscore.value.rawScore
      this.population = this.calculeZscore.value.population
      this.deviation = this.calculeZscore.value.deviation
      let rslt = this.rawScore - this.population
      this.rsltZScore = rslt / this.deviation;
      this.GetZPercent(this.rsltZScore);
      this.poz(this.rsltZScore);
      this.critz(this.rsltZScore);
      console.log(this.GetZPercent(this.rsltZScore));
      console.log(this.GetZPercent(this.rsltZScore));
      console.log(this.GetZPercent(this.rsltZScore));

      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
    }
  }
  CalculateProbabilityZscore(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeZscore.valid) {
      // const normdist = require('normdist');
      this.errorProbability = "";
      this.z1 = this.calculeProbabilityZscore.value.z1
      this.z2 = this.calculeProbabilityZscore.value.z2
      // this.rsltProbabilityZScore = normdist.pnorm(this.z1) - normdist.pnorm(this.z2);
      // const probability = normdist.pnorm(1.96) - normdist.pnorm(-1.96);
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

  poz(z: any) {

    var Z_MAX = 6;
    var y, x, w;

    if (z == 0.0) {
      x = 0.0;
    } else {
      y = 0.5 * Math.abs(z);
      if (y > (Z_MAX * 0.5)) {
        x = 1.0;
      } else if (y < 1.0) {
        w = y * y;
        x = ((((((((0.000124818987 * w
          - 0.001075204047) * w + 0.005198775019) * w
          - 0.019198292004) * w + 0.059054035642) * w
          - 0.151968751364) * w + 0.319152932694) * w
          - 0.531923007300) * w + 0.797884560593) * y * 2.0;
      } else {
        y -= 2.0;
        x = (((((((((((((-0.000045255659 * y
          + 0.000152529290) * y - 0.000019538132) * y
          - 0.000676904986) * y + 0.001390604284) * y
          - 0.000794620820) * y - 0.002034254874) * y
          + 0.006549791214) * y - 0.010557625006) * y
          + 0.011630447319) * y - 0.009279453341) * y
          + 0.005353579108) * y - 0.002141268741) * y
          + 0.000535310849) * y + 0.999936657524;
      }
    }
    return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
  }


  /*  CRITZ  --  Compute critical normal z value to
                 produce given p.  We just do a bisection
                 search for a value within CHI_EPSILON,
                 relying on the monotonicity of pochisq().  */

  critz(p: any) {

    var Z_MAX = 6;
    var Z_EPSILON = 0.000001;     /* Accuracy of z approximation */
    var minz = -Z_MAX;
    var maxz = Z_MAX;
    var zval = 0.0;
    var pval;
    if (p < 0.0) p = 0.0;
    if (p > 1.0) p = 1.0;

    while ((maxz - minz) > Z_EPSILON) {
      pval = this.poz(zval);
      if (pval > p) {
        maxz = zval;
      } else {
        minz = zval;
      }
      zval = (maxz + minz) * 0.5;
    }
    return (zval);
  }

}
