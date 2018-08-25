import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    'title': 'Dev Ops btw'
  }
  ];
  constructor() { }

  ngOnInit() {

  }

  githubClick() {
    this.httpClient.get('/url', {
      params: {
        appid: 'id1234',
        cnt: '5'
      },
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
  }


  linkedinClick() {
    alert('Linkedin')
  }

}
