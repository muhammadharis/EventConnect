import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { CentralSocketService } from '../central-socket.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat-nofification',
  templateUrl: './chat-nofification.component.html',
  styleUrls: ['./chat-nofification.component.css']
})
export class ChatNofificationComponent implements OnChanges {
  notificationList = [];
  socket: SocketIOClient.Socket;
  @Input() myUserName = '';
  @Output() openChatFromNav = new EventEmitter<boolean>();

  constructor(private centralSocket: CentralSocketService) {
  }

  //Creates a room with only the current user
  joinMyOwnRoom(){
    this.centralSocket.getSocket().emit('joinMyOwnRoom', {name: this.myUserName});
  }

  getUnseenChatNames(){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/getUnseenChatNames?username='+this.myUserName, true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.notificationList = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
  }

  goHome(){
    window.location.replace('/selection');
  }

  updateProfile(){
    window.location.replace('/updateProfile');
  }

  checkIn(){
    window.location.replace('/checkin');
  }

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

  openChat(username) {
    // window.location.replace("http://localhost:4200/selection/");
    this.openChatFromNav.emit(username);
  }

  ngOnChanges(changes) {
    console.log(changes);
    this.socket = this.centralSocket.getSocket();
    var self = this;
    console.log(self.myUserName);

    this.joinMyOwnRoom(); //Joins a room named <myUsername>
    if(self.myUserName!=undefined && self.myUserName!=''){ //Ensures that the username has been received from the parent
    self.getUnseenChatNames();
    
    //Receives the delete message from the server and reduces the notification count by removing that user from the current user's notifications
    this.centralSocket.getSocket().on('deleteFromNotificationList', (user: any) => {
      self.notificationList.splice(self.notificationList.indexOf(user.name),1);
    });

    this.centralSocket.getSocket().on('addToNotificationList', (user: any) => {
      console.log(user);
      console.log('received a notification');
      if(self.notificationList.indexOf(user.name)<0){ //if notif for this user doesn't exist, add it to notifs
        self.notificationList.push(user.name);
      }
      
    });
    }
  }

}
