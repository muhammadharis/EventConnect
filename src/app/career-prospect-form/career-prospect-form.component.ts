import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-career-prospect-form',
  templateUrl: './career-prospect-form.component.html',
  styleUrls: ['./career-prospect-form.component.css']
})
export class CareerProspectFormComponent implements OnInit {
  position: '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params.type); //Linkedin or Github
      console.log(params.token);
    });
  
  }

  handlFormSubmission(empForm: any, event: Event){
    event.preventDefault();
    alert('gettit')
  }

  onSubmit() {
    alert('SUCCESS!! :-)')
  }
  
  ngOnInit() {
  }

}
