import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.css']
})
export class LinkedinPageComponent implements OnInit {

  constructor() { }

  github() {
    window.location.replace("/auth/github");
  }
  
  event(){
    
  }

  ngOnInit() {
  }

}
