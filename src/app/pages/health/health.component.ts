import { Component, OnInit } from '@angular/core';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  urlDescription: any;
  constructor() { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
    this.urlDescription = urlAndDescription.arrayDetails[0].urlAndDescriptions;
  }

  ngOnDestroy() {
    this.urlDescription = [];
  }

}
