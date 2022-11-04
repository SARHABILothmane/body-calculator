import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import urlAndDescription from '../../../assets/url-json-descriptions/urlAndDescription.json';

@Component({
  selector: 'app-search-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  options: any[] = [];
  optionsAndUrls :any[] = [];
  filteredOptions$: Observable<string[]> | undefined;

  @ViewChild('autoInput') input: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event: string) {
    let result: any = this.optionsAndUrls.filter(x => x.textInHref == $event);
    this.router.navigateByUrl(result[0].url);
  }

  
  onFocus(e: HTMLElement){
    e.scrollIntoView({ behavior: "smooth" });
  }

  searchBox(){
    if(!this.options.length){
      urlAndDescription.arrayDetails.forEach(element => {
        element.urlAndDescriptions.forEach(ele => {
          this.optionsAndUrls.push(ele);
          this.options.push(ele.textInHref)
        });
      });
      this.filteredOptions$ = of(this.options);
    }
  }

}
