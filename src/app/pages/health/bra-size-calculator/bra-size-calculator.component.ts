import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bra-size-calculator',
  templateUrl: './bra-size-calculator.component.html',
  styleUrls: ['./bra-size-calculator.component.scss']
})
export class BraSizeCalculatorComponent implements OnInit {
  calculteBraSize!: UntypedFormGroup;
  converteBraSize!: UntypedFormGroup;
  selectedBust: string = "in";
  selectedband: string = "in";
  bust!: number;
  band!: number;
  barSize!: number;
  barSizeRslt: string = "";
  message: string = "";
  modelsBsc = {
    bust: 37,
    band: 34,
  }
  error: string = "";
  errorConverter: string = "";
  submitted = false;
  envirement: boolean = environment.production;
  schema: any;
  ////
  // cupSizes = ["A", "B", "C", "D", "DD", "E", "EE", "F", "FF", "G", "GG", "H", "HH", "J", "JJ", "K", "KK", "L", "LL", "M", "MM", "N", "NN"];
  // cup_sizes = ["AA", "A", "B", "C", "D", "DD", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
  cup_sizesiNt = ["AA", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T'];
  cup_sizesAUNZ = ['A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S'];
  cup_sizesJPKO = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  cup_sizes = ['A', 'B', 'C', 'D', 'DD/E', 'DDD/F', 'DDDD/G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  cup_sizesUK = ['A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'J', 'JJ', 'K', 'KK', 'L', 'LL', 'M', 'MM', 'N', 'NN', 'O', 'OO'];
  // cup_sizes = ['A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'J', 'JJ', 'K', 'KK', 'L', 'LL', 'M', 'MM', 'N', 'NN', 'O', 'OO'];
  // sizes = ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62', '64', '66', '68', '70', '72'];
  cup!: string;
  difference: any;
  usa: any;
  uk: any;
  eur: any;
  jp: any;
  aust: any;
  // eur: any;
  // fr: any;
  // es: any;
  // be: any;
  // eu: any;
  // it: any;

  constructor(private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService) {
    this.calculteBraSize = new UntypedFormGroup({
      bust: new UntypedFormControl("", [Validators.required]),
      band: new UntypedFormControl("", [Validators.required]),
      // highHip: new UntypedFormControl("", [Validators.required]),
      // hip: new UntypedFormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online Body Shape Calculator - what Body Shape Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "body shape calculator, body figure, body type calculator, body shape calculator female,  hourglass figure measurements" },
      { name: 'description', content: "Free online Body Shape Calculator tool ( Body Shape Calculator Female, Body Type Calculator, What Body Shape Calculator )" },
      { property: 'og:title', content: "Free online Body Shape Calculator - what Body Shape Calculator" },
      { property: 'og:description', content: "Free online Body Shape Calculator tool ( Body Shape Calculator Female, Body Type Calculator, What Body Shape Calculator )" },
      { property: "og:url", content: "https://body-calculator.com/health/body-shape-calculator/" }
    ]);
    this.CanonicalService.createCanonicalLink("https://body-calculator.com/health/body-shape-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Body shape calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/body-shape-calculator/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "HealthApplication",
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

  get formBsc() { return this.calculteBraSize.controls; }
  public calculeBraSize(e: HTMLElement): void {
    this.submitted = true;
    if (this.calculteBraSize.valid) {
      this.error = "";
      if (this.calculteBraSize.value.bust < this.calculteBraSize.value.band) {
        this.error = "Size bust needs to be earlier than the size band.";
        return;
      }

      if (this.selectedBust === "cm") {
        let bu = (this.calculteBraSize.value.bust / 100) * 39.37;
        this.bust = Math.ceil(bu);
        let ba = (this.calculteBraSize.value.band / 100) * 39.37;
        this.band = Math.ceil(ba);
        if (this.band % 2 != 0) {
          this.band = this.band + (this.band % 2);
          this.difference = (this.bust - this.band);
          this.barSizeRslt = this.band + '/' + this.cup_sizes[this.difference];
          this.usa = this.band + '/' + this.cup_sizes[this.difference];
          this.uk = this.band + '/' + this.cup_sizesUK[this.difference];
          this.aust = this.band + '/' + this.cup_sizesAUNZ[this.difference];
          this.jp = this.band + '/' + this.cup_sizesJPKO[this.difference];
          this.eur = this.band + '/' + this.cup_sizesiNt[this.difference];
        }
        this.band = this.band + (this.band % 2);
        this.difference = (this.bust - this.band) - 1;
        this.barSizeRslt = this.band + '/' + this.cup_sizes[this.difference];
        // this.cup = this.cup_sizes[this.difference];
        this.usa = this.band + '/' + this.cup_sizes[this.difference];
        this.uk = this.band + '/' + this.cup_sizesUK[this.difference];
        this.aust = this.band + '/' + this.cup_sizesAUNZ[this.difference];
        this.jp = this.band + '/' + this.cup_sizesJPKO[this.difference];
        this.eur = this.band + '/' + this.cup_sizesiNt[this.difference];
        if (this.cup_sizes[this.difference] === null) {
          this.error = 'Your size is out-of-range! Please try again.';
        }
        this.message = "cm";
      } else {
        this.bust = Math.ceil(this.calculteBraSize.value.bust);
        this.band = Math.ceil(this.calculteBraSize.value.band);
        if (this.band % 2 != 0) {
          this.band = this.band + (this.band % 2);
          this.difference = (this.bust - this.band);
          this.barSizeRslt = this.band + '/' + this.cup_sizes[this.difference];
          this.usa = this.band + '/' + this.cup_sizes[this.difference];
          this.uk = this.band + '/' + this.cup_sizesUK[this.difference];
          this.aust = this.band + '/' + this.cup_sizesAUNZ[this.difference];
          this.jp = this.band + '/' + this.cup_sizesJPKO[this.difference];
          this.eur = this.band + '/' + this.cup_sizesiNt[this.difference];
        } else {
          this.band = this.band + (this.band % 2);
          this.difference = (this.bust - this.band) - 1;
          this.barSizeRslt = this.band + '/' + this.cup_sizes[this.difference];
          this.usa = this.band + '/' + this.cup_sizes[this.difference];
          this.uk = this.band + '/' + this.cup_sizesUK[this.difference];
          this.aust = this.band + '/' + this.cup_sizesAUNZ[this.difference];
          this.jp = this.band + '/' + this.cup_sizesJPKO[this.difference];
          this.eur = this.band + '/' + this.cup_sizesiNt[this.difference];
        }

        if (this.cup_sizes[this.difference] === null) {
          this.error = 'Your size is out-of-range! Please try again.';
        }
        // this.cup = this.cup_sizes[this.difference];
        this.message = "in";

      }
      e.scrollIntoView({ behavior: "smooth" });
      // this.internation = this.convertBraSizeInter(this.band + this.cup);
      // let t = this.convertBraSize(this.band + this.cup);
    } else {
      this.error = "Please check the fields";
    }
  }
  public converterBraSize(): void { }
  bustSelect(v: any) {
    //cm
    if (this.selectedBust === "cm") {

      if (v == 'in') {
        this.modelsBsc.bust = (this.calculteBraSize.value.bust / 100) * 39.37;
        this.modelsBsc.bust = Math.round(this.modelsBsc.bust * 100) / 100;
        this.selectedBust = "in"
      }
    }

    //in
    if (this.selectedBust === "in") {
      if (v == 'cm') {
        this.modelsBsc.bust = (this.calculteBraSize.value.bust * 100) / 39.37;
        this.modelsBsc.bust = Math.round(this.modelsBsc.bust * 100) / 100;
        this.selectedBust = "cm"
      }
    }
  }
  bandSelect(v: any) {
    //cm
    if (this.selectedband === "cm") {

      if (v == 'in') {
        this.modelsBsc.band = (this.calculteBraSize.value.band / 100) * 39.37;
        this.modelsBsc.band = Math.round(this.modelsBsc.band * 100) / 100;
        this.selectedband = "in"
      }

      //m
    }

    //in
    if (this.selectedband === "in") {

      if (v == 'cm') {
        this.modelsBsc.band = (this.calculteBraSize.value.band * 100) / 39.37;
        this.modelsBsc.band = Math.round(this.modelsBsc.band * 100) / 100;
        this.selectedband = "cm"
      }

    }

  }

  convertBraSizeInter(size: any) {
    switch (size) {
      case "28A":
        return "60A";
      case "28B":
        return "60B";
      case "28C":
        return "60C";
      case "28D":
        return "60D";
      case "30A":
        return "65A";
      case "30B":
        return "65B";
      case "30C":
        return "65C";
      case "30D":
        return "65D";
      case "32A":
        return "70A";
      case "32B":
        return "70B";
      case "32C":
        return "70C";
      case "32D":
        return "70D";
      case "34A":
        return "75A";
      case "34B":
        return "75B";
      case "34C":
        return "75C";
      case "34D":
        return "75D";
      case "36A":
        return "80A";
      case "36B":
        return "80B";
      case "36C":
        return "80C";
      case "36D":
        return "80D";
      case "38A":
        return "85A";
      case "38B":
        return "85B";
      case "38C":
        return "85C";
      case "38D":
        return "85D";
      default:
        return "Invalid size";
    }
  }
  // convertBraSize(size: any) {
  //   switch (size) {
  //     // case "28A":
  //     //   this.usa = "28A";
  //     //   // this.eur = "";
  //     //   this.fr = "85A"
  //     //   this.es = "70A";
  //     //   this.be = "65A";
  //     //   this.eu = "65A";
  //     //   this.it = "1A";
  //     //   this.jp = "65A"
  //     //   this.aust = "10A";
  //     //   return "28A";
  //     // case "28B":
  //     //   return "60B";
  //     // case "28C":
  //     //   return "60C";
  //     // case "28D":
  //     //   return "60D";
  //     case "30A":
  //       this.usa = "30A";
  //       // this.eur = "";
  //       this.fr = "85A"
  //       this.es = "70A";
  //       this.be = "65A";
  //       this.eu = "65A";
  //       this.it = "1A";
  //       this.jp = "65A"
  //       this.aust = "10A";
  //       return "30A";
  //     case "30B":
  //       this.usa = "30B";
  //       // this.eur = "";
  //       this.fr = "85B"
  //       this.es = "70B";
  //       this.be = "65B";
  //       this.eu = "65B";
  //       this.it = "1B";
  //       this.jp = "65B"
  //       this.aust = "10B";
  //       return "30B";
  //     case "30C":
  //       this.usa = "30C";
  //       // this.eur = "";
  //       this.fr = "85C"
  //       this.es = "70C";
  //       this.be = "65C";
  //       this.eu = "65C";
  //       this.it = "1C";
  //       this.jp = "65C"
  //       this.aust = "10C";
  //       return "30C";
  //     case "30D":
  //       this.usa = "30D";
  //       // this.eur = "";
  //       this.fr = "85D"
  //       this.es = "70D";
  //       this.be = "65D";
  //       this.eu = "65D";
  //       this.it = "1D";
  //       this.jp = "65D"
  //       this.aust = "10D";
  //       return "30D";
  //     case "32A":
  //       this.usa = "32A";
  //       // this.eur = "";
  //       this.fr = "90A"
  //       this.es = "75A";
  //       this.be = "70A";
  //       this.eu = "70A";
  //       this.it = "2A";
  //       this.jp = "70A"
  //       this.aust = "12A";
  //       return "32A";
  //     case "32B":
  //       this.usa = "32B";
  //       // this.eur = "";
  //       this.fr = "90B"
  //       this.es = "75B";
  //       this.be = "70B";
  //       this.eu = "70B";
  //       this.it = "2B";
  //       this.jp = "70B"
  //       this.aust = "12B";
  //       return "32B";
  //     case "32C":
  //       this.usa = "32C";
  //       // this.eur = "";
  //       this.fr = "90C"
  //       this.es = "75C";
  //       this.be = "70C";
  //       this.eu = "70C";
  //       this.it = "2C";
  //       this.jp = "70C"
  //       this.aust = "12C";
  //       return "32C";
  //     case "32D":
  //       this.usa = "32D";
  //       // this.eur = "";
  //       this.fr = "90D"
  //       this.es = "75D";
  //       this.be = "70D";
  //       this.eu = "70D";
  //       this.it = "2D";
  //       this.jp = "70D"
  //       this.aust = "12D";
  //       return "32D";
  //     case "34A":
  //       this.usa = "34A";
  //       // this.eur = "";
  //       this.fr = "95A"
  //       this.es = "80A";
  //       this.be = "75A";
  //       this.eu = "75A";
  //       this.it = "3A";
  //       this.jp = "75A"
  //       this.aust = "14A";
  //       return "34A";
  //     case "34B":
  //       this.usa = "34B";
  //       // this.eur = "";
  //       this.fr = "95B"
  //       this.es = "80B";
  //       this.be = "75B";
  //       this.eu = "75B";
  //       this.it = "3B";
  //       this.jp = "75B"
  //       this.aust = "14B";
  //       return "34B";
  //     case "34C":
  //       this.usa = "34C";
  //       // this.eur = "";
  //       this.fr = "95C"
  //       this.es = "80C";
  //       this.be = "75C";
  //       this.eu = "75C";
  //       this.it = "3C";
  //       this.jp = "75C"
  //       this.aust = "14C";
  //       return "34C";
  //     case "34D":
  //       this.usa = "34D";
  //       // this.eur = "";
  //       this.fr = "95D"
  //       this.es = "80D";
  //       this.be = "75D";
  //       this.eu = "75D";
  //       this.it = "3D";
  //       this.jp = "75D"
  //       this.aust = "14D";
  //       return "34D";
  //     case "36A":
  //       this.usa = "36A";
  //       // this.eur = "";
  //       this.fr = "100A"
  //       this.es = "85A";
  //       this.be = "80A";
  //       this.eu = "80A";
  //       this.it = "4A";
  //       this.jp = "80A"
  //       this.aust = "16A";
  //       return "36A";
  //     case "36B":
  //       this.usa = "36B";
  //       // this.eur = "";
  //       this.fr = "100B"
  //       this.es = "85B";
  //       this.be = "80B";
  //       this.eu = "80B";
  //       this.it = "4B";
  //       this.jp = "80B"
  //       this.aust = "16B";
  //       return "36B";
  //     case "36C":
  //       this.usa = "36C";
  //       // this.eur = "";
  //       this.fr = "100C"
  //       this.es = "85C";
  //       this.be = "80C";
  //       this.eu = "80C";
  //       this.it = "4C";
  //       this.jp = "80C"
  //       this.aust = "16C";
  //       return "36C";
  //     case "36D":
  //       this.usa = "36D";
  //       // this.eur = "";
  //       this.fr = "100D"
  //       this.es = "85D";
  //       this.be = "80D";
  //       this.eu = "80D";
  //       this.it = "4D";
  //       this.jp = "80D"
  //       this.aust = "16D";
  //       return "36D";
  //     case "38A":
  //       this.usa = "38A";
  //       // this.eur = "";
  //       this.fr = "105A"
  //       this.es = "90A";
  //       this.be = "85A";
  //       this.eu = "85A";
  //       this.it = "5A";
  //       this.jp = "85A"
  //       this.aust = "18A";
  //       return "38A";
  //     case "38B":
  //       this.usa = "38B";
  //       // this.eur = "";
  //       this.fr = "105B"
  //       this.es = "90B";
  //       this.be = "85B";
  //       this.eu = "85B";
  //       this.it = "5B";
  //       this.jp = "85B"
  //       this.aust = "18B";
  //       return "38B";
  //     case "38C":
  //       this.usa = "38C";
  //       // this.eur = "";
  //       this.fr = "105C"
  //       this.es = "90C";
  //       this.be = "85C";
  //       this.eu = "85C";
  //       this.it = "5C";
  //       this.jp = "85C";
  //       this.aust = "18C";
  //       return "38C";
  //     case "38D":
  //       this.usa = "38D";
  //       // this.eur = "";
  //       this.fr = "105D"
  //       this.es = "90D";
  //       this.be = "85D";
  //       this.eu = "85D";
  //       this.it = "5D";
  //       this.jp = "85D"
  //       this.aust = "18D";
  //       return "38D";
  //     default:
  //       return "Invalid size";
  //   }
  // }

}
