import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  switchTabs: string = "women";
  constructor() { }

  ngOnInit(): void {
  }
  tabsSet(name: string) {
    this.switchTabs = name;
  }
}
