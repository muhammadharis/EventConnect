import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.css']
})
export class GithubCardComponent implements OnInit {
  @Input() username = '';
  repos = {};
    gitJson = {};

  @Output() messageEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    debugger;
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','/api/fetchPublicUser?username='+self.username, true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.gitJson = JSON.parse(xhr.responseText);
        console.log('user');
        console.log(self.gitJson);
        console.log(self.gitJson['login']);
      }
    }
    xhr.send();

    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', '/api/getUserRepos?username='+self.username);
    xhr2.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        debugger;
        self.repos = JSON.parse(xhr2.responseText);
        console.log('repos');
        console.log(self.repos);
      }
    }
    xhr2.send();

  }
  onclick() {
    // window.location.replace("http://localhost:4200/selection/");
    this.messageEvent.emit(false);
    debugger;
  }
}
