import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private metaService: Meta) { }

  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'robots', content: "noindex, nofollow" },
    ]);
  }

}
