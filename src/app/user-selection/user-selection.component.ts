import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  hide = false;
  userList = [{
    'name': 'Anish',
    'img': 'randomurl',
    'title': 'Full Snack Developer'
  },
  {
    'name': 'Craig',
    'img': 'randomurl',
    'title': 'Full Stack Developer'
  },
  {
    'name': 'Navraj',
    'img': 'randomurl',
    'title': 'Dev Ops btw'
  }
  ];

  oauthToken = "";
  constructor() { }
  listIndex = 10;
  ngOnInit() {
    debugger;
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','https://testhackerman12.lib.id/event-connect@dev/get_all_users/');
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
    this.listIndex = index;
    console.log("github");
    debugger;
      // window.location.replace("http://localhost:4200/linke/");
      var self = this;
      self.hide = true;
  }
  like(){

  }
  dislike(){

  }

  linkedinClick() {

  }

  receiveMessage($event) {
    debugger;
    this.hide = $event
  }

}
