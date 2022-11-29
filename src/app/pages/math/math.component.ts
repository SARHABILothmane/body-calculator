import { Component, OnInit } from '@angular/core';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  urlDescription:any;
  constructor() { }

  ngOnInit(): void {
    this.urlDescription = urlAndDescription.arrayDetails[1].urlAndDescriptions;
  }


  ngOnDestroy() {
    this.urlDescription = [];
  }
}
