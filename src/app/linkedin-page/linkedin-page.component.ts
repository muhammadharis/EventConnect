import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.css']
})
export class LinkedinPageComponent implements OnInit {

  constructor() { }

  linkedin() {
    window.location.replace("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86wrv2s8487eej&redirect_uri=http://localhost:9090/authorizeLinkedin&state=987654321&scope=r_fullprofile");
    
    //window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86wrv2s8487eej&redirect_uri=http://localhost:9090/authorizeLinkedin&state=987654321&scope=r_basicprofile");
  }

  github() {
    window.open("https://github.com/login/oauth/authorize?client_id=519813e63570d699ea25&scope=user%20repo%20notifications");
  }
  
  event(){
    
  }

  ngOnInit() {
  }

}
