import { Component, OnInit } from '@angular/core';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';
@Component({
  selector: 'app-calcultor',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalcultorComponent implements OnInit {
  urlDescription: any;
  constructor() { }


  ngOnInit(): void {
    this.urlDescription = urlAndDescription.arrayDetails[2].urlAndDescriptions;
  }

  ngOnDestroy() {
    this.urlDescription = [];
  }

}
