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

  closeNavBarMobile(){
    const elementMenu = document.getElementById("menu-toggle") as HTMLInputElement ;
    // const element = document.getElementById(nameOfElement) as HTMLInputElement ;
    elementMenu.checked  = false;
    // element.checked  = false;
  }

  disableScroll(){
    // const elementMenu = document.getElementsByTagName("menu-toggle") as HTMLInputElement ;
    // const elementMenu = document.getElementsByTagName("menu-toggle") as HTMLInputElement ;
    const elementMenu = document.getElementsByTagName("body") as unknown as HTMLInputElement  ;
    elementMenu[0].classList.add("stop-scrolling");
    // elementMenu[0].style.overflow = 'hidden';
    // elementMenu[0].style.margin = '0';
    // document.body.style.overflow = 'hidden';
    // document.body.style.margin = '0';
    // document.body.classList.add("stop-scrolling");
    // document.scrollingElement?.add("s")
    // app-root
  }
  
  ngOnDestroy() {
    this.urlDescription = [];
  }
}
