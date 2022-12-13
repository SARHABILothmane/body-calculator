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
  calculeBsc!: UntypedFormGroup;
  selectedBust: string = "in";
  selectedband: string = "in";
  bust!: number;
  band!: number;
  // highHip!: number;
  // hip!: number;
  barSize!: number;
  barSizeRslt: string = "";
  message: string = "";
  modelsBsc = {
    bust: 37,
    band: 34,
  }
  error: string = "";
  submitted = false;
  envirement: boolean = environment.production;
  schema: any;
  cup_sizes = ['A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'J', 'JJ', 'K', 'KK', 'L', 'LL', 'M', 'MM', 'N', 'O', 'OO'];
  sizes = ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62', '64', '66', '68', '70', '72'];
  cup!: string;
  constructor(private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService) {
    this.calculeBsc = new UntypedFormGroup({
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

  get formBsc() { return this.calculeBsc.controls; }
  public CalculateBsc(e: HTMLElement): void {
    this.submitted = true;
    if (this.calculeBsc.valid) {
      this.error = "";
      if (this.calculeBsc.value.bust < this.calculeBsc.value.band) {
        this.error = "Size bust needs to be earlier than the size band.";
        return;
      }

      if (this.selectedBust === "cm") {
        this.modelsBsc.bust = (this.calculeBsc.value.bust / 100) * 39.37;
        this.modelsBsc.bust = Math.ceil(this.modelsBsc.bust * 100) / 100;
        this.modelsBsc.band = (this.calculeBsc.value.band / 100) * 39.37;
        this.modelsBsc.band = Math.ceil(this.modelsBsc.band * 100) / 100;
        let difference = (this.modelsBsc.bust - this.modelsBsc.band) - 1;
        this.barSizeRslt = this.modelsBsc.band + this.cup_sizes[difference];
        this.cup = this.cup_sizes[difference];
        if (this.cup_sizes[difference] === null) {
          this.error = 'Your size is out-of-range! Please try again.';
        }
        this.message = "In cm";
      } else {
        this.bust = Math.ceil(this.calculeBsc.value.bust);
        this.band = Math.ceil(this.calculeBsc.value.band);
        let difference = (this.bust - this.band) - 1;
        this.barSizeRslt = this.band + this.cup_sizes[difference];
        if (this.cup_sizes[difference] === null) {
          this.error = 'Your size is out-of-range! Please try again.';
        }
        this.cup = this.cup_sizes[difference];
        this.message = "In in";

      }
      e.scrollIntoView({ behavior: "smooth" });

    } else {
      this.error = "Please check the fields";
    }
  }
  bustSelect(v: any) {
    //cm
    if (this.selectedBust === "cm") {

      if (v == 'in') {
        this.modelsBsc.bust = (this.calculeBsc.value.bust / 100) * 39.37;
        this.modelsBsc.bust = Math.round(this.modelsBsc.bust * 100) / 100;
        this.selectedBust = "in"
      }
    }

    //in
    if (this.selectedBust === "in") {
      if (v == 'cm') {
        this.modelsBsc.bust = (this.calculeBsc.value.bust * 100) / 39.37;
        this.modelsBsc.bust = Math.round(this.modelsBsc.bust * 100) / 100;
        this.selectedBust = "cm"
      }
    }
  }
  bandSelect(v: any) {
    //cm
    if (this.selectedband === "cm") {

      if (v == 'in') {
        this.modelsBsc.band = (this.calculeBsc.value.band / 100) * 39.37;
        this.modelsBsc.band = Math.round(this.modelsBsc.band * 100) / 100;
        this.selectedband = "in"
      }

      //m
    }

    //in
    if (this.selectedband === "in") {

      if (v == 'cm') {
        this.modelsBsc.band = (this.calculeBsc.value.band * 100) / 39.37;
        this.modelsBsc.band = Math.round(this.modelsBsc.band * 100) / 100;
        this.selectedband = "cm"
      }

    }

  }



}
