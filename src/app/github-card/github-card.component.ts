import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.css']
})
export class GithubCardComponent implements OnInit {
  @Input() username = '';
  gitJson = {
    "login": "craigericlewis",
    "id": 22064715,
    "node_id": "MDQ6VXNlcjIyMDY0NzE1",
    "avatar_url": "https://avatars1.githubusercontent.com/u/22064715?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/craigericlewis",
    "html_url": "https://github.com/craigericlewis",
    "followers_url": "https://api.github.com/users/craigericlewis/followers",
    "following_url": "https://api.github.com/users/craigericlewis/following{/other_user}",
    "gists_url": "https://api.github.com/users/craigericlewis/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/craigericlewis/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/craigericlewis/subscriptions",
    "organizations_url": "https://api.github.com/users/craigericlewis/orgs",
    "repos_url": "https://api.github.com/users/craigericlewis/repos",
    "events_url": "https://api.github.com/users/craigericlewis/events{/privacy}",
    "received_events_url": "https://api.github.com/users/craigericlewis/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Craig Lewis",
    "company": null,
    "blog": "",
    "location": null,
    "email": "craigericlewis@gmail.com",
    "hireable": null,
    "bio": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2016-09-08T00:36:59Z",
    "updated_at": "2018-08-25T01:35:29Z",
    "private_gists": 1,
    "total_private_repos": 0,
    "owned_private_repos": 0,
    "disk_usage": 128616,
    "collaborators": 0,
    "two_factor_authentication": false,
    "plan": {
      "name": "developer",
      "space": 976562499,
      "collaborators": 0,
      "private_repos": 9999
    }
  };

  @Output() messageEvent = new EventEmitter<boolean>();
  @Input() oauthToken = '';
  constructor() { }

  ngOnInit() {
    debugger;
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.open('GET','https://testhackerman12.lib.id/github-lite@dev/get_user/?token=' + this.oauthToken + 'target=' +this.username);
    xhr.onreadystatechange = function(){
      debugger;
      if(this.readyState==4 && this.status==200){

        self.gitJson = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
  }
  onclick() {
    // window.location.replace("http://localhost:4200/selection/");
    this.messageEvent.emit(false);
    debugger;
  }
}
