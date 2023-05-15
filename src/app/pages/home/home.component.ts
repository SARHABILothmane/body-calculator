// import { AnimationOptions } from 'ngx-lottie';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from 'src/app/services/canonical.service';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  schema:any;
  urlDescription: any;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private router: Router) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
    this.urlDescription = urlAndDescription;
    this.titleService.setTitle("Body-calculator - free online tool to calculate fitness, time...");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, body fat percentage calculator, basal metabolic rate calculator, body shape calculator, healthy weight calculator, ideal weight calculator, age calculator, data calculator" },
      { name: 'description', content: "Free online calculators for different types fitness, time and more" },
      { property: 'og:title', content: "Body-calculator - free online tool to calculate fitness, time..." },
      { property: 'og:description', content: "Free online calculators for different types fitness, time and more" },
      {property: "og:url", content: "https://body-calculator.com/"}
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com/");
    this.schema = {
                      "@context": "http://schema.org",
                      "@type": "SoftwareApplication",
                      "name": "free online calculators",
                      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
                      "url": "https://body-calculator.com/",
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

  goToPage(url: string){
    this.router.navigateByUrl(url + '.');
  }

  ngOnDestroy() {
    this.urlDescription = [];
  }
}
