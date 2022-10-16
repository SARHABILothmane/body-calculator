import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private metaService: Meta) { }
  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'robots', content: "noindex, nofollow" },
    ]);
  }

}
