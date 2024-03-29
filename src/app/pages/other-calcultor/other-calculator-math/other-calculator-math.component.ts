import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InlineShareButtonsConfig } from 'sharethis-angular';

const inlineShareButtonsConfig: InlineShareButtonsConfig = {
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
  selector: 'app-other-calcultor-math',
  templateUrl: './other-calculator-math.component.html'
})
export class OtherCalcultorMathComponent implements OnInit {
  inlineShareButtonsConfig = inlineShareButtonsConfig;
  arrayOtherCalculators: any;
  @Input() eleminateCalculator: any;
  otherCalculators: string = "";
  goToOtherPage: any;
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
    if (this.eleminateCalculator == 'pc') {
      this.goToOtherPage = { name: "Go to Percentage Increase Calculator", url: "/math/percentage-increase-calculator/" }
    }else if(this.eleminateCalculator == 'pec'){
      this.goToOtherPage = { name: "Go to Percentage Calculator", url: "/math/percentage-calculator/" }
    }else if(this.eleminateCalculator == 'rng'){
      this.goToOtherPage = { name: "Go to Percentage Calculator", url: "/math/percentage-calculator/" }
    }else if(this.eleminateCalculator == 'hc'){
      this.goToOtherPage = { name: "Go to Binary Calculator", url: "/math/binary-calculator/" }
    }else if(this.eleminateCalculator == 'bc'){
       this.goToOtherPage = { name: "Go to Hex Calculator", url: "/math/hex-calculator/" }
    }else if(this.eleminateCalculator == 'permutationc'){
        this.goToOtherPage = { name: "Go to Combination Calculator", url: "/math/combination-calculator/" }
    }else if(this.eleminateCalculator == 'combinationc'){
        this.goToOtherPage = { name: "Go to Permutation Calculator", url: "/math/permutation-calculator/" }
    }else if(this.eleminateCalculator == 'pic'){
          this.goToOtherPage = { name: "Go to Percentage Decrease Calculator", url: "/math/percentage-decrease-calculator/" }
    }else if(this.eleminateCalculator == 'pdc'){
          this.goToOtherPage = { name: "Go to Percentage Increase Calculator", url: "/math/percentage-increase-calculator/" }
    }else if(this.eleminateCalculator == 'exponentC'){
      this.goToOtherPage = { name: "Go to Root Calculator", url: "/math/root-calculator/" }
    }else if(this.eleminateCalculator == 'rootC'){
      this.goToOtherPage = { name: "Go to Exponent Calculator", url: "/math/exponent-calculator/" }
    }else {
      this.goToOtherPage = { name: "Go to Percentage Calculator", url: "/math/percentage-calculator/" }
    }

    this.arrayOtherCalculators = [
      { 'title': 'Binary Calculator', 'url': '/math/binary-calculator/', 'code': 'bc' },
      { 'title': 'Random Number Generator', 'url': '/math/random-number-generator/', 'code': 'rng' },
      { 'title': 'Hex Calculator', 'url': '/math/hex-calculator/', 'code': 'hc' },
      { 'title': 'Percentage Calculator', 'url': '/math/percentage-calculator/', 'code': 'pc' },
      { 'title': 'Percentage Error Calculator', 'url': '/math/percent-error-calculator/', 'code': 'pec' },
      { 'title': 'Permutation Calculator', 'url': '/math/permutation-calculator/', 'code': 'permutationc' },
      { 'title': 'Combination Calculator', 'url': '/math/combination-calculator/', 'code': 'combinationc' },
      { 'title': 'Exponent Calculator', 'url': '/math/exponent-calculator/', 'code': 'exponentC' },
      { 'title': 'Root Calculator', 'url': '/math/root-calculator/', 'code': 'rootC' },
    ];

    this.arrayOtherCalculators = this.arrayOtherCalculators.filter((x: any) => x.code != this.eleminateCalculator);
    this.arrayOtherCalculators.forEach((element: { url: string; title: string; }) => {
      this.otherCalculators += ' <div class="col-md-4 col-12 mb-2">';
      // this.otherCalculators += ' <div class="">';
      this.otherCalculators += '<a  href="' + element.url + '">';
      this.otherCalculators += '<div class="designeButton m-1 p-2 bg-white  d-flex justify-content-between ">';
      this.otherCalculators += '<span class="pr-2 text-dark font-weight-bold ">';
      this.otherCalculators += element.title;
      this.otherCalculators += '</span>';
      this.otherCalculators += '<span class="font-weight-bold text-dark">&raquo; </span>';
      this.otherCalculators += '</div>';
      this.otherCalculators += '</a>';
      // this.otherCalculators +=    '</div>';
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
