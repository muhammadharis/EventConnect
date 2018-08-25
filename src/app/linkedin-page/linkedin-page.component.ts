import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.css']
})
export class LinkedinPageComponent implements OnInit {

  constructor() { }
  
  linkedin() {
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86wrv2s8487eej&redirect_uri=http://localhost:9090/authorizeLinkedin&state=987654321&scope=r_basicprofile");
  }

  github(){
    window.open("https://github.com/login/oauth/authorize?client_id=519813e63570d699ea25&redirect_uri=http://localhost:9090/authorizeGithub&scope=user%20repo%20notifications");
  }

  instagram(){
    window.open("https://api.instagram.com/oauth/authorize/?client_id=1ac142c4f0e24b649478aebc3193b23c&redirect_uri=http://localhost:9090/authorizeInstagram&response_type=code");
  }

  ngOnInit() {
  }

}
