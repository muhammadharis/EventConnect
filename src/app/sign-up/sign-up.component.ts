import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor() { }

  ngOnInit() {
    var self = this;
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
