import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-hex-calculator',
  templateUrl: './hex-calculator.component.html',
  styleUrls: ['./hex-calculator.component.scss']
})
export class HexCalculatorComponent implements OnInit {
  calculeHex!: UntypedFormGroup;
  conveHexToDeci!: UntypedFormGroup;
  conveDeciToHex!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorFormTwo!: string;
  errorFormThree!: string;
  submitted: boolean = false;
  submittedFormTwo: boolean = false;
  submittedFormThree: boolean = false;
  rsltHex!: any;
  rsltDecimal!: any;
  rsltDecimalhex!: any;
  hexOne!: any;
  hexTwo!: any;
  hexOneCal!: any;
  hexTwoCal!: any;
  rsltCalHex!: number;
  rsltCalDecimal!: string;
  addOrSubtractSymbole: string = "+";
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeHex = new UntypedFormGroup({
      hexOne: new UntypedFormControl("", [Validators.required]),
      hexTwo: new UntypedFormControl("", [Validators.required]),
    });
    this.conveHexToDeci = new UntypedFormGroup({
      hex: new UntypedFormControl("", [Validators.required]),
    });
    this.conveDeciToHex = new UntypedFormGroup({
      decimal: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Hex Calculator - Hexadecimal Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "hex calculator, hexadecimal calculator, hexadecimal addition calculator, hex addition calculator, hex cal, " },
      { name: 'description', content: "Free online Hex Calculator and Hexadecimal Calculator, can be used to multiply, divide, add, or subtract hex numbers, as well as to convert decimal to hex" },
      { property: 'og:title', content: "Free online Hex Calculator - Hexadecimal Calculator" },
      { property: 'og:description', content: "Free online Hex Calculator and Hexadecimal Calculator, can be used to multiply, divide, add, or subtract hex numbers, as well as to convert decimal to hex" },
      { property: "og:url", content: "https://body-calculator.com/math/hex-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/hex-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "hex calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/hex-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-11-21",
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
  get formCalculeHex() { return this.calculeHex.controls; }
  get formHexDec() { return this.conveHexToDeci.controls; }
  get formDecHex() { return this.conveDeciToHex.controls; }

  CalculateHex(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeHex.valid) {
      this.error = "";
      this.calculeHex.patchValue({
        hexOne: this.calculeHex.value.hexOne.replace(/\s/g,''),
        hexTwo: this.calculeHex.value.hexTwo.replace(/\s/g,'')
      });
      this.hexOne = parseInt(this.calculeHex.value.hexOne, 16);
      this.hexTwo = parseInt(this.calculeHex.value.hexTwo, 16);
      //  
      this.hexOneCal = this.calculeHex.value.hexOne;
      this.hexTwoCal = this.calculeHex.value.hexTwo;
      if (this.addOrSubtractSymbole === '+') {
        this.rsltCalHex = this.hexOne + this.hexTwo;
      } if (this.addOrSubtractSymbole === '-') {
        this.rsltCalHex = this.hexOne - this.hexTwo;
      }
      if (this.addOrSubtractSymbole === 'x') {
        this.rsltCalHex = this.hexOne * this.hexTwo;
      } if (this.addOrSubtractSymbole === '/') {
        this.rsltCalHex = this.hexOne / this.hexTwo;
      }
      this.rsltCalDecimal = this.rsltCalHex.toString(16);
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.error = "Please check the fields";
    }
  }
  CalculateHexToDeci(e: HTMLElement) {
    this.submittedFormTwo = true;
    if (this.conveHexToDeci.valid) {
      this.errorFormTwo = "";
      this.conveHexToDeci.patchValue({
        hex: this.conveHexToDeci.value.hex.replace(/\s/g,''),
      });
      this.rsltHex = parseInt(this.conveHexToDeci.value.hex, 16);
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorFormTwo = "Please check the fields";
    }
  }
  CalculateDeciToHex(e: HTMLElement) {
    this.submittedFormThree = true;
    if (this.conveDeciToHex.valid) {
      this.errorFormThree = "";
      this.rsltDecimal = this.conveDeciToHex.value.decimal;
      this.rsltDecimal = this.rsltDecimal.toString(16);
      e.scrollIntoView({ behavior: "smooth" });
    } else {
      this.errorFormThree = "Please check the fields";
    }
  }
  changeSymbole(symbole: any) {
    this.addOrSubtractSymbole = symbole;
  }

}
