import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit {
  calculeFormRandomNum!: UntypedFormGroup;
  calculeFormRandomN!: UntypedFormGroup;
  generatedNumber!: number;
  generatedN!: number;
  lenghtGenreteNumbers!: any;
  error!: string;
  errorSecondGnerator!: string;
  submitted: boolean = false;
  submittedFormTwo: boolean = false;
  generateNumbers: Array<number> = [];
  envirement: boolean = environment.production;
  schema: any;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeFormRandomNum = new UntypedFormGroup({
      lowerLimit: new UntypedFormControl("", [Validators.required]),
      upperLimit: new UntypedFormControl("", [Validators.required]),
    });
    this.calculeFormRandomN = new UntypedFormGroup({
      lowerLimit: new UntypedFormControl("", [Validators.required]),
      upperLimit: new UntypedFormControl("", [Validators.required]),
      genreteNumbers: new UntypedFormControl(""),
      duplication: new UntypedFormControl("no"),
      sortNumber: new UntypedFormControl("ascend"),
      typeNumber: new UntypedFormControl("integer"),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Random Number Generator RNG");
    this.metaService.addTags([
      { name: 'keywords', content: "random number generator, pick a number, rng, random number, random generator, random number picker, number randomizer, random numbers" },
      { name: 'description', content: "Free online Random Number Generator RNG (pick a number, random number picker, number randomizer, random numbers)" },
      { property: 'og:title', content: "Free online Random Number Generator RNG" },
      { property: 'og:description', content: "Free online Random Number Generator RNG (pick a number, random number picker, number randomizer, random numbers)" },
      { property: "og:url", content: "https://body-calculator.com/math/random-number-generator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/random-number-generator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Random Number Generator RNG",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/random-number-generator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
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
  get formRandomNumber() { return this.calculeFormRandomNum.controls; }
  get formRandomN() { return this.calculeFormRandomN.controls; }

  public CalculateRandomNumber(): void {
    this.submitted = true;
    if (this.calculeFormRandomNum.valid && this.calculeFormRandomNum.value.upperLimit >= this.calculeFormRandomNum.value.lowerLimit) {
      this.error = '';
      // find diff
      let difference = this.calculeFormRandomNum.value.lowerLimit - this.calculeFormRandomNum.value.upperLimit;
      // generate random number 
      this.generatedNumber = Math.random();
      // multiply with difference 
      this.generatedNumber = Math.round(this.generatedNumber * difference);
      // add with min value 
      this.generatedNumber = this.generatedNumber + this.calculeFormRandomNum.value.upperLimit;
      // e.scrollIntoView({ behavior: "smooth" });
      // this.generatedNumber = ( this.calculeFormRandomNum.value.upperLimit, this.calculeFormRandomNum.value.lowerLimit) => Math.floor(Math.random() * (this.calculeFormRandomNum.value.lowerLimit - this.calculeFormRandomNum.value.upperLimit)) + this.calculeFormRandomNum.value.upperLimit;
    }
    if (this.calculeFormRandomNum.value.upperLimit < this.calculeFormRandomNum.value.lowerLimit) {
      this.error = "The lower limit value needs to be smaller than the upper limit value.";
    }
  }
  public CalculateRandomNumberComprehensive(e: HTMLElement) {
    this.generateNumbers = [];
    this.submittedFormTwo = true;
    if (this.calculeFormRandomN.valid) {
      this.errorSecondGnerator = "";
      let difference = this.calculeFormRandomN.value.upperLimit - this.calculeFormRandomN.value.lowerLimit;

      if (this.calculeFormRandomN.value.duplication == 'no' && difference < this.calculeFormRandomN.value.genreteNumbers) {
        this.errorSecondGnerator = "Please enter number of numbers generator less than difference between (upper limit - lower limit)"
        return
      }
      for (let i = 0; i < this.calculeFormRandomN.value.genreteNumbers; i++) {
        // check Type of result to generate if integer or decimal 
        let numberGenerated: number;
        // console.log(', difference', difference);

        if (this.calculeFormRandomN.value.typeNumber == "integer") {
          numberGenerated = Math.round(Math.random() * difference) + this.calculeFormRandomN.value.lowerLimit;
        } else {
          numberGenerated = (Math.random() * difference) + this.calculeFormRandomN.value.lowerLimit;
        }

        // check if Allow duplication in results 
        if (this.calculeFormRandomN.value.duplication == 'no') {
          let checkIfNumberInArray = this.generateNumbers.filter(x => x == numberGenerated);
          if (checkIfNumberInArray.length == 0) {
            this.generateNumbers.push(numberGenerated);
          } else {
            i--;
          }
        } else {
          this.generateNumbers.push(numberGenerated);
        }
      }

      // check if ascend or desend or no
      if (this.calculeFormRandomN.value.sortNumber != "No") {
        if (this.calculeFormRandomN.value.sortNumber == "ascend") {
          this.generateNumbers.sort(function (a, b) {
            return a - b;
          });
        } else {
          this.generateNumbers.sort(function (a, b) {
            return b - a;
          });
        }
      }

      e.scrollIntoView({ behavior: "smooth" });

    }
  }
}
