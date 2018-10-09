import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  //makes a backend request to logout and redirects to the home page
  logout(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/auth/logout', true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        window.location.replace('/');
      }
    }
    xhr.send();
  }
  ngOnInit() {
  }

}
