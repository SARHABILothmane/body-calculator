import { Component,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-index.component.html',
  styleUrls: ['./body-mass-index.component.scss']
})
export class BodyMassIndexComponent implements OnInit {
  // jsonLD!: SafeHtml;
  schema!: any;
  constructor(private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Free online body mass index BMI calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, bmi calculator men, bmi calculator female, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male, female bmi calculator, male bmi calculator" },
      { name: 'description', content: "Free online body mass index BMI calculator tool (BMI calculator female, BMI calculator men, BMI calculator children, BMI calculator by age)" },
      { property: 'og:title', content: "Body-calculator - free online body mass index BMI calculator men" },
      { property: 'og:description', content: "Free tool that allows you to use body mass index BMI calculator men (bmi calculator for men)" },
      {property: "og:url", content: "https://body-calculator.com/health/bmi-calculator/"}
    ]);
    this.CanonicalService.createCanonicalLink("https://body-calculator.com/health/bmi-calculator/");
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Body mass index bmi calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/bmi-calculator/",
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
    }

  }

}
