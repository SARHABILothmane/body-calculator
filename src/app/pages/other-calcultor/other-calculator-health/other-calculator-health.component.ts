import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-other-calcultor-health',
  templateUrl: './other-calculator-health.component.html',
  styleUrls: ['./other-calculator-health.component.scss']
})
export class OtherCalcultorHealthComponent implements OnInit {
  inlineShareButtonsConfig = inlineShareButtonsConfig;
  arrayOtherCalculators: any;
  @Input() eleminateCalculator: any;
  otherCalculators: string = "";
  goToOtherPage: any;
  constructor() {
  }


  ngOnInit(): void {

    if (this.eleminateCalculator == 'bmi') {
      this.goToOtherPage = { name: "Go to body fat percentage calculator", url: "/health/body-fat-percentage-calculator/." }
    } else {
      this.goToOtherPage = { name: "Body mass index BMI calculator", url: "/health/bmi-calculator/." }
    }
    // if(this.eleminateCalculator == 'bmi'){
    //   this.goToOtherPage =  {name: "Go to body fat percentage calculator", url:"/health/body-fat-percentage-calculator/."}
    // }else if(this.eleminateCalculator == 'bfp'){
    //   this.goToOtherPage =  {name: "Go to body shape calculator", url:"/health/body-shape-calculator/."}
    // }else{
    //   this.goToOtherPage =  {name: "Body mass index BMI calculator", url:"/health/bmi-calculator/."}
    // }

    this.arrayOtherCalculators = [
      { 'title': 'Body mass index BMI calculator', 'url': '/health/bmi-calculator/.', 'code': 'bmi' },
      { 'title': 'Body fat percentage calculator', 'url': '/health/body-fat-percentage-calculator/.', 'code': 'bfp' },
      { 'title': 'Ideal weight calculator', 'url': '/health/ideal-weight-calculator/.', 'code': 'iwc' },
      { 'title': 'Body shape calculator', 'url': '/health/body-shape-calculator/.', 'code': 'bsc' },
      { 'title': 'Basal metabolic rate BMR calculator', 'url': '/health/bmr-calculator/.', 'code': 'bmr' },
      { 'title': 'Healthy weight calculator', 'url': '/health/healthy-weight-calculator/.', 'code': 'hwc' },
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
}
