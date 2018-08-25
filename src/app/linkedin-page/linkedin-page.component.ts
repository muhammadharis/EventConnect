import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.css']
})
export class LinkedinPageComponent implements OnInit {
  list = [
    {
        name: 'CHEESE'
    },
    {
        name: 'MOUSE'
    }
  ]
  constructor() { }

  ngOnInit() {
    alert('hi');
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86wrv2s8487eej&redirect_uri=http://localhost:9090/authorize&state=987654321&scope=r_basicprofile");
  }

}
