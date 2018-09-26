import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brightnessValue: number = 0;

  constructor(private brightness: Brightness) { }

  changeBrightnessLevel() {
    this.brightness.setBrightness(this.brightnessValue / 100);
  }
}
