import { Component, OnInit, Input, Output} from '@angular/core';
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
  // @Output() messageEvent = new EventEmitter<string>();
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
    debugger;
    var self = this;
    var position = document.forms["position"]["fname"].value;
    var linkedinProfileName = document.forms["position"]["linkedinName"].value;

    self.payload['position'] = position;
    console.log(position);
    console.log(self.payload);

    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://testhackerman12.lib.id/event-connect@dev/login?position='+position+'&token='+self.payload['token']+'&type='+self.payload['type']+'&long='+self.longitude+'&lat='+self.latitude+'&linkedinProfileName='+linkedinProfileName,true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){


      }
      if(this.readyState==4 && this.status!=200){
        debugger;
        console.log(xhr.responseText);
        //window.location.replace("http://localhost:4200/selection");
      }
    }
    xhr.send();
    window.location.replace("http://localhost:4200/selection/?oauthToken=" + self.payload['token']);
    return false;
  }

  ngOnInit() {
    console.log(this.payload);
  }

}
