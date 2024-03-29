import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { JPush } from '@jiguang-ionic/jpush';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,jpush: JPush) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      jpush.init();
      jpush.setDebugMode(true);

      document.addEventListener('jpush.receiveRegistrationId', function (event) {
        console.log(event['registrationId']);
      }, false)

      document.addEventListener("jpush.openNotification", function (event) {
        console.log("openNotification");
        console.log(JSON.stringify(event));
      }, false)

      document.addEventListener("jpush.receiveNotification", function (event) {
        console.log("receiveNotification");
        console.log(JSON.stringify(event));
      }, false)

      document.addEventListener("jpush.backgroundNotification", function (event) {
        console.log("backgroundNotification");
        console.log(JSON.stringify(event));
      }, false)

      document.addEventListener("jpush.receiveMessage", function(event) {
        console.log("receiveMessage");
        console.log(JSON.stringify(event));
      }, false)
    });
  }
}

