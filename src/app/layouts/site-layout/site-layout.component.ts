import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent implements OnInit {
  showCookie: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
}
