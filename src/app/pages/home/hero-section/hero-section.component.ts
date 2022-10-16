import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  // imageLoaded: boolean = false;
  envirement: boolean = environment.production;
  // optionsF: AnimationOptions = {
  //   path: '/assets/animations/symgery-body-icon.json',
  // };
  // options: AnimationOptions = {
  //   path: '/assets/animations/humanbody01.json',
  // };

  constructor() { }
  ngOnInit(): void {

  }

  // animationCreated(animationItem: AnimationItem): void {
  //   this.imageLoaded = !this.imageLoaded
  // }
}
