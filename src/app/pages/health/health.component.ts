import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private metaService: Meta) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'robots', content: "noindex, nofollow" },
    ]);
  }

}
