import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculatorFitness';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "da636ddc-dfa3-45d5-8263-4cb7a9fbf361",
    });
  }
}
