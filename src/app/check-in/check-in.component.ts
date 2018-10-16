import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  myUserName = "";
  myAvatarURL = "";
  myName = "";
  lat: number = 51.678418;
  lng: number = 7.809007;
  username = "";
  chatbox = false;
  checkin = true;
  constructor() { }


  checkInClick(){
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('PUT','/api/updateLatAndLong?lat='+this.lat+'&long='+this.lng, true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        alert("Successfully checked in!")
      }
      else if(this.readyState==4 && this.status!=200){
        alert("There was a problem checking in. Please try again later.")
      }
    }
    xhr.send();
  }

  openChatFromNav($event){
    this.username = $event;
    this.chatbox = true;
    this.checkin = false;
  }

  closeChatbox(e){
    this.chatbox = false;
    this.checkin = true;
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
      }
    }
    xhr.send();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        self.lat = position.coords.latitude;
        self.lng = position.coords.longitude;
        console.log(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
