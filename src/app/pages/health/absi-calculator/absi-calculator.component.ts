import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-absi-calculator',
  templateUrl: './absi-calculator.component.html',
  styleUrls: ['./absi-calculator.component.scss']
})
export class AbsiCalculatorComponent implements OnInit {

  calculeAbsi!: UntypedFormGroup;
  bmi!: number;
  absi!: number;
  ABSIzscore!: number;
  heightCm!: number;
  error: string = "";
  submitted = false;
  message: string = "";
  addCataloge: boolean = false;
  selectedHeight: string = "cm";
  selectedWaistCircumference: string = "cm";
  selectedWeight: string = "kg";
  checked: string = "female";
  imageLoaded: boolean = false;

  modelsBmi = {
    age: 0,
    height: 0,
    weight: 0,
    waistCircumference: 0,
  };

  meanABSIMale: any;
  sdABSIMale: any;
  meanABSIFemale: any;
  sdABSIFemale: any;
  keys = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]
  // keysFemale = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]
  valuesFemale1 = [
    0.08031,
    0.08016,
    0.08001,
    0.07985,
    0.07969,
    0.07952,
    0.07935,
    0.07917,
    0.07899,
    0.07881,
    0.07863,
    0.07846,
    0.07829,
    0.07814,
    0.07799,
    0.07787,
    0.07775,
    0.07765,
    0.07757,
    0.07750,
    0.07744,
    0.07740,
    0.07737,
    0.07735,
    0.07734,
    0.07735,
    0.07736,
    0.07739,
    0.07743,
    0.07747,
    0.07752,
    0.07759,
    0.07766,
    0.07773,
    0.07782,
    0.07790,
    0.07800,
    0.07810,
    0.07820,
    0.07831,
    0.07842,
    0.07854,
    0.07866,
    0.07879,
    0.07892,
    0.07905,
    0.07919,
    0.07933,
    0.07947,
    0.07962,
    0.07977,
    0.07992,
    0.08007,
    0.08023,
    0.08039,
    0.08055,
    0.08072,
    0.08088,
    0.08105,
    0.08122,
    0.08139,
    0.08156,
    0.08174,
    0.08191,
    0.08208,
    0.08226,
    0.08243,
    0.08261,
    0.08278,
    0.08296,
    0.08313,
    0.08330,
    0.08346,
    0.08363,
    0.08380,
    0.08396,
    0.08412,
    0.08428,
    0.08444,
    0.08460,
    0.08476,
    0.08492,
    0.08508,
    0.08533
  ]
  valuesFemale2 = [
    0.00363,
    0.00366,
    0.00369,
    0.00372,
    0.00375,
    0.00378,
    0.00380,
    0.00383,
    0.00386,
    0.00389,
    0.00392,
    0.00395,
    0.00397,
    0.00400,
    0.00403,
    0.00406,
    0.00408,
    0.00411,
    0.00414,
    0.00416,
    0.00419,
    0.00422,
    0.00424,
    0.00427,
    0.00429,
    0.00432,
    0.00435,
    0.00437,
    0.00440,
    0.00442,
    0.00445,
    0.00447,
    0.00450,
    0.00452,
    0.00454,
    0.00457,
    0.00459,
    0.00462,
    0.00464,
    0.00466,
    0.00469,
    0.00471,
    0.00473,
    0.00476,
    0.00478,
    0.00480,
    0.00483,
    0.00485,
    0.00487,
    0.00489,
    0.00492,
    0.00494,
    0.00496,
    0.00498,
    0.00501,
    0.00503,
    0.00505,
    0.00507,
    0.00509,
    0.00511,
    0.00514,
    0.00516,
    0.00518,
    0.00520,
    0.00522,
    0.00524,
    0.00526,
    0.00528,
    0.00530,
    0.00533,
    0.00535,
    0.00537,
    0.00539,
    0.00541,
    0.00543,
    0.00545,
    0.00547,
    0.00549,
    0.00551,
    0.00553,
    0.00555,
    0.00557,
    0.00559,
    0.00528
  ]
  valuesMale1 = [
    0.07890,
    0.07915,
    0.07937,
    0.07955,
    0.07964,
    0.07966,
    0.07958,
    0.07942,
    0.07917,
    0.07886,
    0.07849,
    0.07810,
    0.07772,
    0.07739,
    0.07716,
    0.07703,
    0.07702,
    0.07711,
    0.07728,
    0.07750,
    0.07777,
    0.07804,
    0.07831,
    0.07858,
    0.07882,
    0.07904,
    0.07922,
    0.07938,
    0.07951,
    0.07963,
    0.07975,
    0.07988,
    0.08000,
    0.08013,
    0.08027,
    0.08042,
    0.08057,
    0.08072,
    0.08087,
    0.08102,
    0.08117,
    0.08132,
    0.08148,
    0.08165,
    0.08183,
    0.08201,
    0.08221,
    0.08240,
    0.08260,
    0.08279,
    0.08297,
    0.08315,
    0.08334,
    0.08352,
    0.08369,
    0.08386,
    0.08403,
    0.08419,
    0.08436,
    0.08454,
    0.08471,
    0.08489,
    0.08506,
    0.08522,
    0.08537,
    0.08551,
    0.08565,
    0.08578,
    0.08591,
    0.08604,
    0.08616,
    0.08629,
    0.08641,
    0.08653,
    0.08665,
    0.08675,
    0.08685,
    0.08695,
    0.08705,
    0.08714,
    0.08723,
    0.08732,
    0.08742,
    0.08811
  ]
  valuesMale2 = [
    0.00384,
    0.00384,
    0.00383,
    0.00383,
    0.00382,
    0.00382,
    0.00382,
    0.00381,
    0.00381,
    0.00381,
    0.00380,
    0.00380,
    0.00380,
    0.00379,
    0.00379,
    0.00378,
    0.00378,
    0.00378,
    0.00377,
    0.00377,
    0.00377,
    0.00376,
    0.00376,
    0.00376,
    0.00375,
    0.00375,
    0.00374,
    0.00374,
    0.00374,
    0.00373,
    0.00373,
    0.00373,
    0.00372,
    0.00372,
    0.00371,
    0.00371,
    0.00371,
    0.00370,
    0.00370,
    0.00370,
    0.00369,
    0.00369,
    0.00368,
    0.00368,
    0.00368,
    0.00367,
    0.00367,
    0.00367,
    0.00366,
    0.00366,
    0.00365,
    0.00365,
    0.00365,
    0.00364,
    0.00364,
    0.00364,
    0.00363,
    0.00363,
    0.00362,
    0.00362,
    0.00362,
    0.00361,
    0.00361,
    0.00360,
    0.00360,
    0.00360,
    0.00359,
    0.00359,
    0.00359,
    0.00358,
    0.00358,
    0.00357,
    0.00357,
    0.00357,
    0.00356,
    0.00356,
    0.00355,
    0.00355,
    0.00355,
    0.00354,
    0.00354,
    0.00354,
    0.00353,
    0.00356
  ]

  // va1 = [
  //   0.07778,
  //   0.07931,
  //   0.07932,
  //   0.08009,
  //   0.07989,
  //   0.07968,
  //   0.08063,
  //   0.08025,
  //   0.07969,
  //   0.07964,
  //   0.07953,
  //   0.07807,
  //   0.07712,
  //   0.07647,
  //   0.07583,
  //   0.07625,
  //   0.07665,
  //   0.07665,
  //   0.07715,
  //   0.07754,
  //   0.07861,
  //   0.07839,
  //   0.07794,
  //   0.07880,
  //   0.07895,
  //   0.07936,
  //   0.07999,
  //   0.07944,
  //   0.07949,
  //   0.07890,
  //   0.07922,
  //   0.08010,
  //   0.07977,
  //   0.08039,
  //   0.07966,
  //   0.07999,
  //   0.08031,
  //   0.08114,
  //   0.08089,
  //   0.08127,
  //   0.08122,
  //   0.08084,
  //   0.08110,
  //   0.08140,
  //   0.08272,
  //   0.08176,
  //   0.08119,
  //   0.08272,
  //   0.08322,
  //   0.08261,
  //   0.08281,
  //   0.08272,
  //   0.08324,
  //   0.08388,
  //   0.08321,
  //   0.08529,
  //   0.08374,
  //   0.08343,
  //   0.08392,
  //   0.08487,
  //   0.08455,
  //   0.08513,
  //   0.08489,
  //   0.08547,
  //   0.08583,
  //   0.08518,
  //   0.08565,
  //   0.08633,
  //   0.08534,
  //   0.08603,
  //   0.08635,
  //   0.08605,
  //   0.08648,
  //   0.08713,
  //   0.08671,
  //   0.08691,
  //   0.08592,
  //   0.08745,
  //   0.08759,
  //   0.08714,
  //   0.08713,
  //   0.08714,
  //   0.08763,
  //   0.08811,
  // ]
  // va2 = [
  //   0.00312,
  //   0.00283,
  //   0.00300,
  //   0.00335,
  //   0.00362,
  //   0.00341,
  //   0.00415,
  //   0.00423,
  //   0.00408,
  //   0.00442,
  //   0.00438,
  //   0.00434,
  //   0.00436,
  //   0.00415,
  //   0.00379,
  //   0.00376,
  //   0.00361,
  //   0.00393,
  //   0.00410,
  //   0.00370,
  //   0.00452,
  //   0.00364,
  //   0.00363,
  //   0.00354,
  //   0.00381,
  //   0.00402,
  //   0.00387,
  //   0.00381,
  //   0.00370,
  //   0.00317,
  //   0.00374,
  //   0.00408,
  //   0.00367,
  //   0.00358,
  //   0.00397,
  //   0.00381,
  //   0.00367,
  //   0.00363,
  //   0.00354,
  //   0.00335,
  //   0.00347,
  //   0.00339,
  //   0.00327,
  //   0.00332,
  //   0.00426,
  //   0.00306,
  //   0.00323,
  //   0.00400,
  //   0.00333,
  //   0.00385,
  //   0.00360,
  //   0.00399,
  //   0.00356,
  //   0.00406,
  //   0.00386,
  //   0.00393,
  //   0.00344,
  //   0.00354,
  //   0.00354,
  //   0.00354,
  //   0.00348,
  //   0.00352,
  //   0.00275,
  //   0.00343,
  //   0.00343,
  //   0.00324,
  //   0.00298,
  //   0.00382,
  //   0.00387,
  //   0.00356,
  //   0.00364,
  //   0.00325,
  //   0.00387,
  //   0.00363,
  //   0.00313,
  //   0.00348,
  //   0.00383,
  //   0.00361,
  //   0.00384,
  //   0.00395,
  //   0.00370,
  //   0.00342,
  //   0.00385,
  //   0.00356,
  // ]
  // v = [
  //   0.07922,
  //   0.08000,
  //   0.08045,
  //   0.08085,
  //   0.08006,
  //   0.08013,
  //   0.08039,
  //   0.08016,
  //   0.07914,
  //   0.07934,
  //   0.07825,
  //   0.07807,
  //   0.07762,
  //   0.07701,
  //   0.07739,
  //   0.07714,
  //   0.07705,
  //   0.07743,
  //   0.07712,
  //   0.07786,
  //   0.07728,
  //   0.07726,
  //   0.07771,
  //   0.07699,
  //   0.07719,
  //   0.07756,
  //   0.07772,
  //   0.07744,
  //   0.07703,
  //   0.07714,
  //   0.07738,
  //   0.07786,
  //   0.07779,
  //   0.07756,
  //   0.07854,
  //   0.07815,
  //   0.07861,
  //   0.07779,
  //   0.07790,
  //   0.07892,
  //   0.07833,
  //   0.07882,
  //   0.07774,
  //   0.07860,
  //   0.07900,
  //   0.07916,
  //   0.07888,
  //   0.07978,
  //   0.07894,
  //   0.08039,
  //   0.08068,
  //   0.07941,
  //   0.08054,
  //   0.07872,
  //   0.08000,
  //   0.08025,
  //   0.08204,
  //   0.08038,
  //   0.08094,
  //   0.08183,
  //   0.08146,
  //   0.08226,
  //   0.08120,
  //   0.08148,
  //   0.08148,
  //   0.08283,
  //   0.08228,
  //   0.08209,
  //   0.08316,
  //   0.08394,
  //   0.08246,
  //   0.08495,
  //   0.08342,
  //   0.08276,
  //   0.08464,
  //   0.08539,
  //   0.08332,
  //   0.08376,
  //   0.08543,
  //   0.08406,
  //   0.08355,
  //   0.08542,
  //   0.08407,
  //   0.08533,
  // ]
  // v2 = [
  //   0.00319,
  //   0.00303,
  //   0.00280,
  //   0.00327,
  //   0.00338,
  //   0.00333,
  //   0.00388,
  //   0.00370,
  //   0.00378,
  //   0.00400,
  //   0.00403,
  //   0.00439,
  //   0.00441,
  //   0.00391,
  //   0.00399,
  //   0.00394,
  //   0.00413,
  //   0.00419,
  //   0.00465,
  //   0.00415,
  //   0.00430,
  //   0.00463,
  //   0.00490,
  //   0.00407,
  //   0.00543,
  //   0.00450,
  //   0.00468,
  //   0.00402,
  //   0.00421,
  //   0.00478,
  //   0.00484,
  //   0.00474,
  //   0.00459,
  //   0.00452,
  //   0.00425,
  //   0.00396,
  //   0.00500,
  //   0.00480,
  //   0.00462,
  //   0.00403,
  //   0.00463,
  //   0.00493,
  //   0.00498,
  //   0.00462,
  //   0.00386,
  //   0.00477,
  //   0.00542,
  //   0.00464,
  //   0.00506,
  //   0.00436,
  //   0.00471,
  //   0.00420,
  //   0.00541,
  //   0.00498,
  //   0.00566,
  //   0.00504,
  //   0.00491,
  //   0.00481,
  //   0.00514,
  //   0.00478,
  //   0.00448,
  //   0.00471,
  //   0.00556,
  //   0.00604,
  //   0.00566,
  //   0.00486,
  //   0.00544,
  //   0.00528,
  //   0.00485,
  //   0.00501,
  //   0.00563,
  //   0.00495,
  //   0.00443,
  //   0.00449,
  //   0.00501,
  //   0.00500,
  //   0.00611,
  //   0.00585,
  //   0.00598,
  //   0.00567,
  //   0.00641,
  //   0.00611,
  //   0.00484,
  //   0.00528,
  // ]
  envirement: boolean = environment.production;
  schema: any;
  constructor(
    private titleService: Title, private metaService: Meta, private canonical: CanonicalService) { }


  ngOnInit(): void {
    this.titleService.setTitle("Free online Body Fat Percentage Calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "body fat percentage, body fat percentage calculator, body fat percentage women, women body fat percentage, healthy body fat percentage, body fat percentage men, average body fat percentage, how to calculate body fat percentage, calculate body fat percentage, what is my body fat percentage, female body fat percentage, body fat percentage for men, how to know your body fat percentage" },
      { name: 'description', content: "Free online Body Fat Percentage Calculator to indicate how healthy you are (body fat calculator)" },
      { property: 'og:title', content: "Free online Body Fat Percentage Calculator" },
      { property: 'og:description', content: "Free online Body Fat Percentage Calculator to indicate how healthy you are (body fat calculator)" },
      { property: "og:url", content: "https://body-calculator.com/health/body-fat-percentage-calculator/" }
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/health/body-fat-percentage-calculator/");

    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Body fat percentage calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/body-fat-percentage-calculator/",
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

    this.calculeAbsi = new UntypedFormGroup({
      age: new UntypedFormControl("", [Validators.required, Validators.min(5), Validators.max(100)]),
      height: new UntypedFormControl("", [Validators.required]),
      weight: new UntypedFormControl("", [Validators.required]),
      gender: new UntypedFormControl("female", [Validators.required]),
      waistCircumference: new UntypedFormControl("", [Validators.required]),
    });


  }

  checkedGender(v: any) {
    this.checked = v;
  }
  get formabsi() { return this.calculeAbsi.controls; }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  claculteAbsi(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeAbsi.valid) {
      this.error = "";
      this.addCataloge = true;
      e.scrollIntoView({ behavior: "smooth" });
      //cm kg
      if (this.checked === 'male') {
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.getAbsiWithAge(this.calculeAbsi.value.age);
          this.ABSIzscore = (this.absi - this.meanABSIMale) / this.sdABSIMale;
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "kg") {
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.getAbsiWithAge(this.calculeAbsi.value.age);
          this.ABSIzscore = (this.absi - this.meanABSIMale) / this.sdABSIMale;
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
        //in kg
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          this.bmi = this.calculeAbsi.value.weight / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.getAbsiWithAge(this.calculeAbsi.value.age);
          this.ABSIzscore = (this.absi - this.meanABSIMale) / this.sdABSIMale;
          this.selectedHeight = "in";
          this.selectedWeight = "kg";
        }
        //feet kg
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          this.bmi = this.calculeAbsi.value.weight / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.getAbsiWithAge(this.calculeAbsi.value.age);
          this.ABSIzscore = (this.absi - this.meanABSIMale) / this.sdABSIMale;
          this.selectedHeight = "ft";
          this.selectedWeight = "kg";
        }
        ///////dag
        //cm dag
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "dag") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "dag";
        }
        //m dag
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "dag") {
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "dag";
        }
        //in dag
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "dag";
        }
        //feet dag
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "dag";
        }
        ///////lb
        //cm dag
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "lb") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "lb";
        }
        //m dag
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "lb") {
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "lb";
        }
        //in lb
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.calculeAbsi.value.height, 2)) * 703;
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "lb";
        }
        //feet lb
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "lb";
        }
        /////////OZ
        //cm oz
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "oz") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "oz";
        }
        //m oz
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "oz") {
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "oz";
        }
        //in oz
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "oz";
        }
        //feet oz
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "oz";
        }
        this.getAbsiWithAge(this.calculeAbsi.value.age);
        this.ABSIzscore = (this.absi - this.meanABSIMale) / this.sdABSIMale;
        //rslt  ///////////////////////
        if (this.ABSIzscore <= -0.868) {
          this.message = "Very low";
        }
        if (this.ABSIzscore > -0.867 && this.ABSIzscore <= -0.272) {
          this.message = "Low";
        }
        if (this.ABSIzscore > -0.271 && this.ABSIzscore <= 0.229) {
          this.message = "Average";
        }
        if (this.ABSIzscore > 0.230 && this.ABSIzscore <= 0.798) {
          this.message = "High";
        }
        if (this.ABSIzscore >= 0.799) {
          this.message = "Very high";
        }
      }
      //cm kg
      if (this.checked === 'female') {
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "kg") {
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
        //in kg
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          this.bmi = this.calculeAbsi.value.weight / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "kg";
        }
        //feet kg
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          this.bmi = this.calculeAbsi.value.weight / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "kg";
        }
        ///////dag
        //cm dag
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "dag") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "dag";
        }
        //m dag
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "dag") {
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "dag";
        }
        //in dag
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "dag";
        }
        //feet dag
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "dag";
        }
        ///////lb
        //cm dag
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "lb") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "lb";
        }
        //m dag
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "lb") {
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "lb";
        }
        //in lb
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          this.bmi = this.calculeAbsi.value.weight / (this.square(this.calculeAbsi.value.height, 2)) * 703;
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "lb";
        }
        //feet lb
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "lb";
        }
        /////////OZ
        //cm oz
        if (this.selectedWaistCircumference === "cm" && this.selectedHeight === "cm" && this.selectedWeight === "oz") {
          this.heightCm = this.calculeAbsi.value.height / 100;
          let wc = this.calculeAbsi.value.waistCircumference / 100;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.heightCm, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "cm";
          this.selectedWeight = "oz";
        }
        //m oz
        if (this.selectedWaistCircumference === "m" && this.selectedHeight === "m" && this.selectedWeight === "oz") {
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.calculeAbsi.value.height, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(this.calculeAbsi.value.height, 1 / 2);
          this.absi = this.calculeAbsi.value.waistCircumference / (b * h);
          this.selectedHeight = "m";
          this.selectedWeight = "oz";
        }
        //in oz
        if (this.selectedWaistCircumference === "in" && this.selectedHeight === "in" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeAbsi.value.height / 39.37;
          let wc = this.calculeAbsi.value.waistCircumference / 39.37;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "in";
          this.selectedWeight = "oz";
        }
        //feet oz
        if (this.selectedWaistCircumference === "ft" && this.selectedHeight === "ft" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeAbsi.value.height * 0.3048;
          let wc = this.calculeAbsi.value.waistCircumference * 0.3048;
          let weightRslt = this.calculeAbsi.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          let b = this.square(this.bmi, 2 / 3);
          let h = this.square(heightRslt, 1 / 2);
          this.absi = wc / (b * h);
          this.selectedHeight = "ft";
          this.selectedWeight = "oz";
        }
        //rslt 
        this.getAbsiWithAge(this.calculeAbsi.value.age);
        this.ABSIzscore = (this.absi - this.meanABSIFemale) / this.sdABSIFemale;
        if (this.ABSIzscore <= -0.868) {
          this.message = "Very low";
        }
        if (this.ABSIzscore > -0.867 && this.ABSIzscore <= -0.272) {
          this.message = "Low";
        }
        if (this.ABSIzscore > -0.271 && this.ABSIzscore <= 0.229) {
          this.message = "Average";
        }
        if (this.ABSIzscore > 0.230 && this.ABSIzscore <= 0.798) {
          this.message = "High";
        }
        if (this.ABSIzscore >= 0.799) {
          this.message = "Very high";
        }
      }


    } else {
      this.error = "Please check the fields";
    }
    // this.calculeAbsi.reset();
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsBmi.height = this.calculeAbsi.value.height / 100;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsBmi.height = (this.calculeAbsi.value.height / 100) * 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height * 100) / 0.3048;
        this.modelsBmi.height = this.calculeAbsi.value.height / 30.48;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsBmi.height = this.calculeAbsi.value.height * 100;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeAbsi.value.height * 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsBmi.height = this.calculeAbsi.value.height / 0.3048;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeAbsi.value.height / 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsBmi.height = (this.calculeAbsi.value.height * 100) / 39.37;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height / 39.37) / 0.3048;
        this.modelsBmi.height = this.calculeAbsi.value.height / 12;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeAbsi.value.height * 0.3048;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height * 100) * 0.3048;
        this.modelsBmi.height = this.calculeAbsi.value.height * 30.48;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeAbsi.value.height * 12;
        this.modelsBmi.height = Math.round(this.modelsBmi.height * 100) / 100;
        this.selectedHeight = "in"
      }
    }
  }
  waistCircumferenceSelect(v: any) {
    //cm
    if (this.selectedWaistCircumference === "cm") {
      if (v === 'm') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference / 100;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "m";
      }
      if (v == 'in') {
        this.modelsBmi.waistCircumference = (this.calculeAbsi.value.waistCircumference / 100) * 39.37;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "in"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height * 100) / 0.3048;
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference / 30.48;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "ft"
      }
      //m
    } if (this.selectedWaistCircumference === "m") {
      if (v === 'cm') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference * 100;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference * 39.37;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "in"
      }
      if (v == 'ft') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference / 0.3048;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "ft"
      }
    }
    //in
    if (this.selectedWaistCircumference === "in") {
      if (v == 'm') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference / 39.37;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "m"
      }
      if (v == 'cm') {
        this.modelsBmi.waistCircumference = (this.calculeAbsi.value.waistCircumference * 100) / 39.37;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height / 39.37) / 0.3048;
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference / 12;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "ft"
      }
    }
    //ft
    if (this.selectedWaistCircumference === "ft") {
      if (v == 'm') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference * 0.3048;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "m"
      }
      if (v == 'cm') {
        // this.modelsBmi.height = (this.calculeAbsi.value.height * 100) * 0.3048;
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference * 30.48;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.waistCircumference = this.calculeAbsi.value.waistCircumference * 12;
        this.modelsBmi.waistCircumference = Math.round(this.modelsBmi.waistCircumference * 100) / 100;
        this.selectedWaistCircumference = "in"
      }
    }
  }
  //
  weightSelect(v: any) {
    //km
    if (this.selectedWeight === "kg") {
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 2.205;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 100;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 35.274;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
    }
    //dag
    if (this.selectedWeight === "dag") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 100;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 45.359;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 2.835;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
    }
    //lb
    if (this.selectedWeight === "lb") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 2.205;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 16;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "oz";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 45.359;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
    }
    //oz
    if (this.selectedWeight === "oz") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 35.274;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight / 16;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeAbsi.value.weight * 2.835;
        this.modelsBmi.weight = Math.round(this.modelsBmi.weight * 100) / 100;
        this.selectedWeight = "dag";
      }
    }
  }
  getAbsiWithAge(search: any) {
    let map = new Map();
    let mapMale = new Map();
    this.keys.forEach((key, i) => {
      let vals = [this.valuesMale1[i], this.valuesMale2[i]];
      mapMale.set(this.keys[i], vals);
    });
    this.keys.forEach((key, i) => {
      let vals = [this.valuesFemale1[i], this.valuesFemale2[i]];
      map.set(this.keys[i], vals);
    });
    let b = search + mapMale.get(search).reduce((pre: any, val: any) => { this.meanABSIMale = pre, this.sdABSIMale = val });
    let a = search + map.get(search).reduce((pre: any, val: any) => { this.meanABSIFemale = pre, this.sdABSIFemale = val });
  }
  //getter 
  get age() {
    return this.calculeAbsi.get("age") as UntypedFormControl;
  }
  get height() {
    return this.calculeAbsi.get("height") as UntypedFormControl;
  }
  get weight() {
    return this.calculeAbsi.get("weight") as UntypedFormControl;
  }
  get gender() {
    return this.calculeAbsi.get("gender") as UntypedFormControl;
  }
  get waistCircumference() {
    return this.calculeAbsi.get("waistCircumference") as UntypedFormControl;
  }
}
