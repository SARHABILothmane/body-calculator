import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InlineShareButtonsConfig} from 'sharethis-angular';


const inlineShareButtonsConfig:InlineShareButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  labels: 'cta', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  networks: [
  // which networks to include (see SHARING NETWORKS)
  'sharethis',
  'facebook',
  'twitter',
  'linkedin',
  'whatsapp',
  'messenger',
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: false,
  size: 40, // the size of each button (INTEGER)
};
@Component({
  selector: 'app-other-calcultor-time',
  templateUrl: './other-calculator-time.component.html'
})
export class OtherCalcultorTimeComponent implements OnInit {
  arrayOtherCalculators: any;
  inlineShareButtonsConfig = inlineShareButtonsConfig;

  @Input() eleminateCalculator: any;
  otherCalculators: string = "";
  goToOtherPage:any;
  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe( params => 
      {
        setTimeout(() => {
          const arrowTwo = document.getElementById('arrowTwo'); 
          const arrow = document.getElementById('arrow'); 

          arrow?.animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
          ],{
            duration: 700,
            iterations: Infinity
          });

          arrowTwo?.animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
          ],{
            duration: 700,
            iterations: Infinity
          });
        }, 2000);
    });
  }


  ngOnInit(): void {
    if(this.eleminateCalculator == 'ac'){
      this.goToOtherPage =  {name: "Date Calculator", url:"/calculators/date-calculator/."}
    }else if(this.eleminateCalculator == 'tc'){
      this.goToOtherPage =  {name: "Date Calculator", url:"/calculators/date-calculator/."}
    }else if(this.eleminateCalculator == 'dc'){
      this.goToOtherPage =  {name: "Age Calculator", url:"/calculators/age-calculator/."}
    }else{
      this.goToOtherPage =  {name: "Date Calculator", url:"/calculators/date-calculator/."}
    }

    this.arrayOtherCalculators = [
      { 'title': 'Age Calculator', 'url': '/calculators/age-calculator/.', 'code': 'ac' },
      { 'title': 'Date Calculator', 'url': '/calculators/date-calculator/.', 'code': 'dc' },
      { 'title': 'Time Calculator', 'url': '/calculators/time-calculator/.', 'code': 'tc' },
    ];
    this.arrayOtherCalculators = this.arrayOtherCalculators.filter((x: any) => x.code != this.eleminateCalculator);

    this.arrayOtherCalculators.forEach((element: { url: string; title: string; }) => {
      this.otherCalculators += ' <div class="col-md-4 col-12 ">';
      this.otherCalculators += '<a  href="' + element.url + '">';
      this.otherCalculators += '<div class="designeButton m-1 p-2 bg-white  d-flex justify-content-between ">';
      this.otherCalculators += '<span class="pr-2 text-dark font-weight-bold ">';
      this.otherCalculators += element.title;
      this.otherCalculators += '</span>';
      this.otherCalculators += '<span class="font-weight-bold text-dark">&raquo; </span>';
      this.otherCalculators += '</div>';
      this.otherCalculators += '</a>';
      this.otherCalculators += '</div>';
    });
  }

  ngOnDestroy() {
    this.arrayOtherCalculators = [];
    this.otherCalculators = "";
    this.inlineShareButtonsConfig = {networks: []};
    this.goToOtherPage = "";
    this.eleminateCalculator = "";
  }
}
