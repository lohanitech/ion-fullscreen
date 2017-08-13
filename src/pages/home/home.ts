import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private androidFullScreen: AndroidFullScreen) {

  }


  goToFullScreen() {
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
  }

  showSystemUI(){
    this.androidFullScreen.showSystemUI();
  }

  leanMode(){
    this.androidFullScreen.leanMode();
  }

  showUnderStatusBar(){
    this.androidFullScreen.showUnderStatusBar();
  }

  showUnderSystemUI(){
    this.androidFullScreen.showUnderSystemUI();
  }
}
