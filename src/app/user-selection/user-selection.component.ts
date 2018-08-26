import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  hide = false;
  userList = [];
  // [{
  //   'name': 'Anish',
  //   'img': 'randomurl',
  //   'title': 'Full Snack Developer',
  //   'linkedinProfileUrl' : '',
  //   'username' : ''
  // },
  // {
  //   'name': 'Craig',
  //   'img': 'randomurl',
  //   'title': 'Full Stack Developer',
  //   'linkedinProfileUrl' : '',
  //   'username' : ''
  // },
  // {
  //   'name': 'Navraj',
  //   'img': 'randomurl',
  //   'title': 'Dev Ops btw',
  //   'linkedinProfileUrl' : '',
  //   'username' : ''
  // }
  // ];

  oauthToken = "";
  username = "";
  constructor() { }
  ngOnInit() {
    debugger;
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','https://testhackerman12.lib.id/event-connect@dev/get_near_users/');
    xhr.onreadystatechange = function(){
      debugger;
      if(this.readyState==4 && this.status==200){

        self.userList = JSON.parse(xhr.responseText);
        console.log(self.userList);
      }
    }
    xhr.send();

    this.oauthToken= new URLSearchParams(window.location.search).get('oauthToken');
  }

  githubClick(index) {
    debugger;
    this.username = this.userList[index].username;
    console.log("github");
    debugger;
      // window.location.replace("http://localhost:4200/linke/");
      var self = this;
      self.hide = true;
  }
  like(index){
    var xhr = new XMLHttpRequest();
    var self = this;
    var endpoint = 'https://testhackerman12.lib.id/github-lite@dev/follow_user/';
    endpoint += '?';
    endpoint += 'token=' + this.oauthToken;
    endpoint += '&target=' + this.userList[index].username;
    xhr.open('GET','' + endpoint);
    console.log(this.userList[index].username);
    xhr.onreadystatechange = function(){
        console.log('following broooo');
    }
    xhr.send();
    //disable like
  }
  dislike(index){
    var xhr = new XMLHttpRequest();
    var self = this;
    var endpoint = 'https://testhackerman12.lib.id/github-lite@dev/unfollow_user/';
    endpoint += '?';
    endpoint += 'token=' + this.oauthToken;
    endpoint += '&target=' + this.userList[index].username;
    xhr.open('GET','' + endpoint);
    xhr.onreadystatechange = function(){
        console.log('unfollowing brooo');
    }
    xhr.send();
    //disable unfollow
  }

  linkedinClick(index) {
    window.open("https://www.linkedin.com/in/" + this.userList[index].linkedinProfileUrl);
  }

  receiveMessage($event) {
    debugger;
    this.hide = $event
  }

}
