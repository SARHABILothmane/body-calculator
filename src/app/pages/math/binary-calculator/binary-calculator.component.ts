import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-binary-calculator',
  templateUrl: './binary-calculator.component.html',
  styleUrls: ['./binary-calculator.component.scss']
})
export class BinaryCalculatorComponent implements OnInit {
  calculeBinary!: UntypedFormGroup;
  conveBinaryToDeci!: UntypedFormGroup;
  conveDeciToBinary!: UntypedFormGroup;
  schema: any;
  envirement: boolean = environment.production;
  error!: string;
  errorFormTwo!: string;
  errorFormThree!: string;
  submitted: boolean = false;
  submittedFormTwo: boolean = false;
  submittedFormThree: boolean = false;
  rsltBinary!: any;
  rsltDecimal!: any;
  rsltDecimalBinary!: any;
  binaryOne!: any;
  binaryTwo!: any;
  binaryOneCal!: any;
  binaryTwoCal!: any;
  rsltCalBinary!: number;
  rsltCalDecimal!: string;
  addOrSubtractSymbole: string = "+";
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService) {
    this.calculeBinary = new UntypedFormGroup({
      binaryOne: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
      binaryTwo: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
    });
    this.conveBinaryToDeci = new UntypedFormGroup({
      binary: new UntypedFormControl("", [Validators.required, Validators.pattern("^[0-1]{1,100}$"),]),
    });
    this.conveDeciToBinary = new UntypedFormGroup({
      decimal: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Binary calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "binary calculator,binary,calculator,decimal to binary in calculator,decimal to binary,binary to decimal calculator,binary addition with use calculator,how to convert decimal to binary using calculator,binary to decimal,paper binary calculator,binary calculator circuit,decimal to binary calculator,binary converter,binary,decimal to binary conversion,decimal to binary converter,convert decimal to binary,binary to decimal converter,how to convert decimal to binary,decimal to binary,converter,binary to decimal conversion,how to convert binary to decimal,bcd to binary converter,text to binary converter,binary number,bcd to binary code converter,binary to decimal,binary conversion,binary number system converter" },
      { name: 'description', content: "Free online Binary calculator and Binary Converter. The following calculators can be used to multiply, divide, add, or subtract two binary numbers, as well as to convert binary to decimal values and vice versa. " },
      { property: 'og:title', content: "Free online Binary calculator and Binary Converter" },
      { property: 'og:description', content: "Free online Binary calculator and Binary Converter. The following calculators can be used to multiply, divide, add, or subtract two binary numbers, as well as to convert binary to decimal values and vice versa." },
      { property: "og:url", content: "https://body-calculator.com/math/binary-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/math/binary-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/math/binary-calculator/",
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
  get formCalculeBinary() { return this.calculeBinary.controls; }
  get formBinaryDec() { return this.conveBinaryToDeci.controls; }
  get formDecBinary() { return this.conveDeciToBinary.controls; }

  CalculateBinary() {
    this.submitted = true;
    if (this.calculeBinary.valid) {
      this.error = "";
      this.binaryOne = parseInt(this.calculeBinary.value.binaryOne, 2);
      this.binaryTwo = parseInt(this.calculeBinary.value.binaryTwo, 2);
      //  
      this.binaryOneCal = this.calculeBinary.value.binaryOne;
      this.binaryTwoCal = this.calculeBinary.value.binaryTwo;
      if (this.addOrSubtractSymbole === '+') {
        this.rsltCalBinary = this.binaryOne + this.binaryTwo;
      } if (this.addOrSubtractSymbole === '-') {
        this.rsltCalBinary = this.binaryOne - this.binaryTwo;
      }
      if (this.addOrSubtractSymbole === 'x') {
        this.rsltCalBinary = this.binaryOne * this.binaryTwo;
      }
      if (this.addOrSubtractSymbole === '/') {
        this.rsltCalBinary = this.binaryOne / this.binaryTwo;
      }
      this.rsltCalDecimal = this.rsltCalBinary.toString(2)
    }
    else {
      this.error = "Please check the fields";
    }
  }
  CalculateBinaryToDeci() {
    this.submittedFormTwo = true;
    if (this.conveBinaryToDeci.valid) {
      this.errorFormTwo = "";
      this.rsltBinary = parseInt(this.conveBinaryToDeci.value.binary, 2);
      console.log(this.rsltBinary);
    } else {
      this.errorFormTwo = "Please check the fields";
    }
  }
  CalculateDeciToBinary() {
    this.submittedFormThree = true;
    if (this.conveDeciToBinary.valid) {
      this.errorFormThree = "";
      this.rsltDecimal = this.conveDeciToBinary.value.decimal;
      this.rsltDecimal = this.rsltDecimal.toString(2)
    } else {
      this.errorFormThree = "Please check the fields";
    }
  }
  changeSymbole(symbole: any) {
    this.addOrSubtractSymbole = symbole;
  }
  // function toDecimal(v) {
  //   let binary = '';
  //   if(typeof v == 'string') {
  //     binary = v.split();
  //   } else {
  //       binary = v.toString().split();
  //   }
  //   let decimal = 0;
  //   for(let i = 0; i < binary.length; i++) {
  //       decimal = (decimal * 2) + binary[i];
  //   }
  //   return decimal;
  // }
}
