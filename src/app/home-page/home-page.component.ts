import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  notLoggedIn = false;
  constructor() { 
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/api/isLoggedIn', false);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        window.location.replace('/signup');
      }
      else if(this.readyState==4 && this.status!=200){
        self.notLoggedIn = true;
      }
    }
    xhr.send();
  }

  github() {
    window.location.replace("/auth/github");
  }
  
  event(){
    
  }

  ngOnInit() {
    

  }

}
