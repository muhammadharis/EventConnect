import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  myUserName = "";
  myAvatarURL = "";
  myName = "";
  linkedinURL = "";
  currLinkedinURL = "";
  updatedName = "";
  editProfile = true;
  chatbox = false;
  username = "";

  constructor() { }

  alertInfo(){
    alert(this.myUserName+this.myAvatarURL+this.myName);
  }
  openChatFromNav($event){
    this.username = $event;
    this.chatbox = true;
    this.editProfile = false;
  }
  updateScreenName(){
    this.myName = this.updatedName;
    if(!this.updatedName || this.updatedName ==""){
      alert("Your chosen name cannot be empty");
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('PUT','/api/updateName?name='+this.updatedName, true);
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        alert("Done updating");
      }
    }
    xhr.send();
    this.updatedName = "";
  }
  updateLinkedinURL(){
    if(!this.linkedinURL.includes("linkedin.com/")){
      alert("Invalid entry. Please enter URL in the form linkedin.com/<USERNAME>")
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('PUT','/api/updateLinkedinURL?url='+this.linkedinURL, true);
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        alert("Done updating");
      }
    }
    xhr.send();
    this.currLinkedinURL = this.linkedinURL;
    this.linkedinURL="";
  }

  openLinkedinProfile(){
    if(!(this.currLinkedinURL.includes('https://'))){
      window.open('https://'+this.currLinkedinURL);
    }
    else{
      window.open(this.currLinkedinURL);
    }
  }

  closeChatbox($event){
    this.chatbox = false;
    this.editProfile = true;
  }
  ngOnInit() {
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','/api/getMyUserName', true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        var resp = JSON.parse(xhr.responseText);
        self.myUserName = resp.username;
        self.myAvatarURL = resp.avatar_url;
        self.myName = resp.name;
        self.currLinkedinURL = resp.linkedinProfileName;
      }
    }
    xhr.send();
  }

}
