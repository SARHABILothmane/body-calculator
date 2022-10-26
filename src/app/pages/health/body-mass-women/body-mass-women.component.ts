import { CanonicalService } from 'src/app/services/canonical.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-women.component.html',
  styleUrls: ['./body-mass-women.component.scss']
})
export class BodyMassWomenComponent implements OnInit {

  href: string = "";

  constructor(private router: Router, private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService, private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }
  ngOnInit(): void {
    this.href = this.router.url;
    this.titleService.setTitle("Body-calculator - body mass index (BMI) calculator for women");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator women, bmi calculator by age, children's bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, bmi calculator for women, womens bmi calculator, bmi calculator adults" },
      { name: 'description', content: "Free tool allows you to use bmi calculator women and more (bmi calculator for women, body mass index for women)" },
      { property: 'og:title', content: "Body-calculator - body mass index (BMI) calculator for women" },
      { property: 'og:description', content: "Free tool allows you to use bmi calculator women and more (bmi calculator for women, body mass index for women)" },
      {property: "og:url", content: "https://body-calculator.com/health/bmi-calculator-women/"}
    ]);
    this.CanonicalService.createCanonicalLink("https://body-calculator.com/health/bmi-calculator-women/");

    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
                    {
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
                    }
                `;

    this._renderer2.appendChild(this._document.body, script);
  }

}
