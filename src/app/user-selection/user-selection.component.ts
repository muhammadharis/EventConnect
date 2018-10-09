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
  myUserName = "";
  oauthToken = "";
  username = "";
  showChat = false;

  constructor() {
  }
  ngOnInit() {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','/api/getMyUserName', true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.myUserName = JSON.parse(xhr.responseText).username;
      }
    }
    

    xhr.send();
    debugger;
    var xhr2 = new XMLHttpRequest();
    var self = this;
    xhr2.open('GET','/api/getUsersNearby', true);
    xhr2.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.userList = JSON.parse(xhr2.responseText);
        console.log(self.userList);
      }
    }
    xhr2.send();
  }
  message(index){
    this.username = this.userList[index].username;
    this.showChat=false; //this may seem stupid, but it refreshes component so that socket connection is established again
    this.showChat=true;
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
