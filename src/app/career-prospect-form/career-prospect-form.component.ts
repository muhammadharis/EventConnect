import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-career-prospect-form',
  templateUrl: './career-prospect-form.component.html',
  styleUrls: ['./career-prospect-form.component.css']
})
export class CareerProspectFormComponent implements OnInit {
  @Input() latitude = 0;
  @Input() longitude = 0;
  // @Output() messageEvent = new EventEmitter<string>();
  constructor() {

  }

  handlFormSubmission(empForm: any, event: Event){
    event.preventDefault();
  }

  onSubmit(e) {
    debugger;
    var self = this;
    var position = document.forms["position"]["fname"].value;
    var linkedinProfileName = document.forms["position"]["linkedinName"].value;
    
    var payload = {
      position: position,
      long: self.longitude,
      lat: self.latitude,
      career: position,
      linkedinProfileName: linkedinProfileName
    }
    console.log(payload)

    var xhr = new XMLHttpRequest();
    xhr.open('POST','/api/addLocationAndCareer',true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        window.location.replace("/selection");
      }

      if(this.readyState==4 && this.status!=200){
        debugger;
        console.log(xhr.responseText);
        window.location.replace("/signup");
      }
    }
    xhr.send(JSON.stringify(payload));
    return false;
  }

  ngOnInit() {
  }

}
