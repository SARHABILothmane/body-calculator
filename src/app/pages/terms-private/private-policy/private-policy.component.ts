import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-private-policy',
  templateUrl: './private-policy.component.html',
  styleUrls: ['./private-policy.component.scss']
})
export class PrivatePolicyComponent implements OnInit {

  constructor(private metaService: Meta) { }

  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'robots', content: "noindex, nofollow" },
    ]);
  }

}
