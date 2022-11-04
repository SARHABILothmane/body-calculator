import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dt: any;
  urlDescription: any;
  constructor(private router: Router) { }
  // faFacebook = faFacebook;
  // faInstagram = faInstagram;
  // faGooglePlus = faGooglePlus;
  // faTwitter = faTwitter;
  ngOnInit(): void {
    this.dt = new Date().getFullYear();
    this.urlDescription = urlAndDescription;
  }
  goToEspace() {
    this.router.navigateByUrl("/candidat");
  }

}
