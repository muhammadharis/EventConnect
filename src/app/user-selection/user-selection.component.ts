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
    xhr.open('GET','/api/getUsersNearby', true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.userList = JSON.parse(xhr.responseText);
        console.log(self.userList);
      }
    }
    xhr.send();
  }

  githubClick(index) {
    debugger;
    this.username = this.userList[index].username;
    alert(this.userList[index].username);
    console.log("github");
    debugger;
      // window.location.replace("http://localhost:4200/linke/");
      var self = this;
      self.hide = true;
  }
  like(index){
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('POST', '/api/followUser?username='+self.userList[index].username, true);
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        alert("You followed "+self.userList[index].username);
      }

      else if(this.readyState == 4 && this.status != 200){
        alert("Error following");
      }
    }
    xhr.send();
    //disable like
  }
  dislike(index){
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('POST', '/api/unfollowUser?username='+self.userList[index].username, true);
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        alert("You unfollowed "+self.userList[index].username);
      }

      else if(this.readyState == 4 && this.status != 200){
        alert("Error following");
      }
    }
    xhr.send();
  }

  linkedinClick(index) {
    window.open("https://www.linkedin.com/in/" + this.userList[index].linkedinProfileName);
  }

  receiveMessage($event) {
    debugger;
    this.hide = $event
  }

}
