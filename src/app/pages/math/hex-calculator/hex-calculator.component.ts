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
    this.titleService.setTitle("Free online Hex calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "hex calculator,hex,calculator,decimal to hex in calculator,decimal to hex,hex to decimal calculator,hex addition with use calculator,how to convert decimal to hex using calculator,hex to decimal,paper hex calculator,hex calculator circuit,decimal to hex calculator,hex converter,hex,decimal to hex conversion,decimal to hex converter,convert decimal to hex,hex to decimal converter,how to convert decimal to hex,decimal to hex,converter,hex to decimal conversion,how to convert hex to decimal,bcd to hex converter,text to hex converter,hex number,bcd to hex code converter,hex to decimal,hex conversion,hex number system converter" },
      { name: 'description', content: "Free online hex calculator and hex Converter. The following calculators can be used to multiply, divide, add, or subtract two hex numbers, as well as to convert hex to decimal values and vice versa. " },
      { property: 'og:title', content: "Free online hex calculator and hex Converter" },
      { property: 'og:description', content: "Free online hex calculator and hex Converter. The following calculators can be used to multiply, divide, add, or subtract two hex numbers, as well as to convert hex to decimal values and vice versa." },
      { property: "og:url", content: "https://body-calculator.com/math/hex-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/hex-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/hex-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
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
  get formCalculeHex() { return this.calculeHex.controls; }
  get formHexDec() { return this.conveHexToDeci.controls; }
  get formDecHex() { return this.conveDeciToHex.controls; }

  CalculateHex() {
    this.submitted = true;
    if (this.calculeHex.valid) {
      this.error = "";
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
      this.rsltCalDecimal = this.rsltCalHex.toString(16)
    } else {
      this.error = "Please check the fields";
    }
  }
  CalculateHexToDeci() {
    this.submittedFormTwo = true;
    if (this.conveHexToDeci.valid) {
      this.errorFormTwo = "";
      this.rsltHex = parseInt(this.conveHexToDeci.value.hex, 16);
    } else {
      this.errorFormTwo = "Please check the fields";
    }
  }
  CalculateDeciToHex() {
    this.submittedFormThree = true;
    if (this.conveDeciToHex.valid) {
      this.errorFormThree = "";
      this.rsltDecimal = this.conveDeciToHex.value.decimal;
      this.rsltDecimal = this.rsltDecimal.toString(16)
    } else {
      this.errorFormThree = "Please check the fields";
    }
  }
  changeSymbole(symbole: any) {
    this.addOrSubtractSymbole = symbole;
  }

}
