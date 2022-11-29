import { CanonicalService } from 'src/app/services/canonical.service';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-women.component.html',
  styleUrls: ['./body-mass-women.component.scss']
})
export class BodyMassWomenComponent implements OnInit {

  href: string = "";
  schema: any;
  constructor(private router: Router, private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService) { }
  ngOnInit(): void {
    this.href = this.router.url;
    this.titleService.setTitle("Free online Body Mass Index BMI Calculator Women");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator women, bmi calculator by age, children's bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, bmi calculator for women, womens bmi calculator, bmi calculator adults" },
      { name: 'description', content: "Free tool allows you to use BMI calculator women (BMI calculator for women, Body Mass Index for Women)" },
      { property: 'og:title', content: "Free online Body Mass Index BMI Calculator Women" },
      { property: 'og:description', content: "Free tool allows you to use bmi calculator women and more (bmi calculator for women, body mass index for women)" },
      {property: "og:url", content: "https://body-calculator.com/health/bmi-calculator-women/"}
    ]);
    this.CanonicalService.createCanonicalLink("https://body-calculator.com/health/bmi-calculator-women/");
    this.schema = {
                      "@context": "http://schema.org",
                      "@type": "SoftwareApplication",
                      "name": "Body mass index bmi calculator for men",
                      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
                      "url": "https://body-calculator.com/health/bmi-calculator-women/",
                      "author": {
                        "@type": "Person",
                        "name": "SARHABIL"
                      },
                      "datePublished": "2022-03-26",
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

}
