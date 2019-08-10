import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private jpush: JPush) {
  }

  getRegistrationID() {

    this.jpush.getRegistrationID().then(id=>{
      console.log(id);
      alert(id);
    }).catch(err=>{
      console.log(err);
    })
  }

  setAlias(alias) {
    this.jpush.setAlias({ sequence: 1, alias: alias }).then( (result) => {
      var sequence = result.sequence
      var alias = result.alias
    }).catch((error) => {
      var sequence = error.sequence
      var errorCode = error.code
    })
  }

  getAlias() {
    this.jpush.getAlias({ sequence: 1 }).then(
      (result) => {
        var sequence = result.sequence
        var alias = result.alias
        alert(result.alias);
      }).catch ((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  deleteAlias() {
    this.jpush.deleteAlias({ sequence: 1 }).then(
      (result) => {
        var sequence = result.sequence
      }).catch( (error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  setTags(tags) {
    this.jpush.setTags({ sequence: 1, tags: tags }).then(
      (result) => {
        var sequence = result.sequence
        var tags = result.tags  // 数组类型
      }).catch((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  addTags(tags) {
    this.jpush.addTags({ sequence: 1, tags: tags }).then(
      (result) => {
        var sequence = result.sequence
        var tags = result.tags  // 数组类型
      }).catch((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  deleteTags(tags) {
    this.jpush.deleteTags({ sequence: 1, tags: tags }).then(
      (result) => {
        var sequence = result.sequence
      }).catch((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  cleanTags() {
    this.jpush.cleanTags({ sequence: 1 }).then(
      (result) => {
        var sequence = result.sequence
      }).catch((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  getAllTags() {
    this.jpush.getAllTags({ sequence: 1 }).then(
      (result) => {
        var sequence = result.sequence
        alert(JSON.stringify(result));
      }).catch((error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  checkTagBindState(tag) {
    this.jpush.checkTagBindState({ sequence: 1, tag: tag }).then(
      (result) => {
        var sequence = result.sequence
        alert(JSON.stringify(result));
      }).catch( (error) => {
        var sequence = error.sequence
        var errorCode = error.code
      })
  }

  setBadge(number) {
    this.jpush.setBadge(number);
  }

  resetBadge() {
    this.jpush.resetBadge();
  }

  getLocalBadge() {
    this.jpush.getApplicationIconBadgeNumber().then((number)=>{
      alert(number);
    }).catch((err)=>{
      console.log(err);
    });
  }

  setLocalBadge(number) {
      this.jpush.setApplicationIconBadgeNumber(number);
  }

  addLocalNotification(delay,id) {
    this.jpush.addLocalNotificationForIOS(delay, id, 1, id, null)
  }

  deleteLocalNotification(id) {
    this.jpush.deleteLocalNotificationWithIdentifierKeyInIOS(id);
  }

  clearLocalNotification() {
    this.jpush.clearLocalNotifications();
  }

  getNotificationSetting() {
    this.jpush.getUserNotificationSettings().then((result)=>{
      console.log(result);
      alert(JSON.stringify(result));
      }).catch(err=>{
          console.log(err);
      })
  }

 
}
