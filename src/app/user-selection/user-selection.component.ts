import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  userList = [{
    'name': 'Anish',
    'img': 'randomurl',
    'title': 'Full Snack Developer'
    },
    {
    'name': 'Craig',
    'img': 'randomurl',
    'title': 'Full Stack Developer'
  },
  {
    'name': 'Navraj',
    'img': 'randomurl',
    'title': 'Dev Ops btw'  }
];
  constructor() { }

  ngOnInit() {
    
  }

  userJoin(){

  }

}
