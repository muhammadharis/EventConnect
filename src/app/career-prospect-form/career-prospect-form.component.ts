import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-career-prospect-form',
  templateUrl: './career-prospect-form.component.html',
  styleUrls: ['./career-prospect-form.component.css']
})
export class CareerProspectFormComponent implements OnInit {
  @Input() latitude = 0;
  @Input() longitude = 0;
  payload =  {};

  constructor(private activatedRoute: ActivatedRoute) {
    var self = this;
    self.activatedRoute.queryParams.subscribe((params: Params) => {
      if(params.type && params.token){
        console.log(params.type); //Linkedin or Github
        console.log(params.token);
        console.log(self.payload);
        self.payload['type'] = params.type;
        self.payload['token'] = params.token;
      }
    });
  
  }

  handlFormSubmission(empForm: any, event: Event){
    event.preventDefault();
    alert('gettit')
  }
  
  onSubmit(e) {
    var self = this;
    var position = document.forms["position"]["fname"].value;
    self.payload['position'] = position;
    console.log(position);
    console.log(self.payload);

    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://testhackerman12.lib.id/event-connect@dev/login?position='+position+'&token='+self.payload['token']+'&type='+self.payload['type']+'&long='+this.longitude+'&lat='+this.latitude,true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        console.log(xhr.responseText);
      }
    }
    xhr.send();

    return false;
  }
  
  ngOnInit() {
    console.log(this.payload);
  }

}
