import { Component, OnInit } from '@angular/core';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  urlDescription:any;
  constructor() { }

  ngOnInit(): void {
    this.urlDescription = urlAndDescription.arrayDetails[3].urlAndDescriptions;
  }


  ngOnDestroy() {
    this.urlDescription = [];
  }

}
