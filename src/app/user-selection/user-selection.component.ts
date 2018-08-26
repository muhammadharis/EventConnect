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
  constructor() { }

  ngOnInit() {

  }

  githubClick() {
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
