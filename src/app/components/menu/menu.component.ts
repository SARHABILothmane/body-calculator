import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidebar')
  sidebar!: ElementRef;
  isClosed: boolean = true;
  loading = false;
  detailsFormation: any;
  urlDescription: any;
  constructor() { }

  ngOnInit(): void {
    this.urlDescription = urlAndDescription;
  }
  toggle() {
    if (this.isClosed) {
      this.sidebar.nativeElement.style.width = '250px';

      this.isClosed = !this.isClosed;
    } else {
      this.sidebar.nativeElement.style.width = '0px';
      this.isClosed = !this.isClosed;
    }
  }

}
