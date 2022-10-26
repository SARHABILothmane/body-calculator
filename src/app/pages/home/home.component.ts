import { AnimationOptions } from 'ngx-lottie';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService,
              private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  bmi: AnimationOptions = {
    path: '/assets/animations/bmi.json',
  };
  bfp: AnimationOptions = {
    path: '/assets/animations/bfp.json',
  };
  iwc: AnimationOptions = {
    path: '/assets/animations/iwc.json',
  };
  bsc: AnimationOptions = {
    path: '/assets/animations/bsc.json',
  };
  bmr: AnimationOptions = {
    path: '/assets/animations/bmr.json',
  };
  hwc: AnimationOptions = {
    path: '/assets/animations/hwc.json',
  };
  date: AnimationOptions = {
    path: '/assets/animations/date.json',
  };
  age: AnimationOptions = {
    path: '/assets/animations/age.json',
  };
  time: AnimationOptions = {
    path: '/assets/animations/time.json',
  };
  calendre: AnimationOptions = {
    path: '/assets/animations/lf20_jrrlfpbo.json',
  };


  ngOnInit(): void {
    this.titleService.setTitle("Body-calculator - free online tool to calculate fitness, time...");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, body fat percentage calculator, basal metabolic rate calculator, body shape calculator, healthy weight calculator, ideal weight calculator, age calculator, data calculator" },
      { name: 'description', content: "Free online calculators for different types fitness, time and more" },
      { property: 'og:title', content: "Body-calculator - free online tool to calculate fitness, time..." },
      { property: 'og:description', content: "Free online calculators for different types fitness, time and more" },
      {property: "og:url", content: "https://body-calculator.com/"}
    ]);
    this.canonical.createCanonicalLink("https://body-calculator.com");

    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
                    {
                      "@context": "http://schema.org",
                      "@type": "SoftwareApplication",
                      "name": "free online calculators",
                      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
                      "url": "https://body-calculator.com",
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
                `;

    this._renderer2.appendChild(this._document.body, script);
  }
}
