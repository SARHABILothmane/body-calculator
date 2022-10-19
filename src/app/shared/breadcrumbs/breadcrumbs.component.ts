import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent{
  @Input() infoAndUrl: any;
  constructor() {
   }

  // ngOnInit(): void {
  // }

}
