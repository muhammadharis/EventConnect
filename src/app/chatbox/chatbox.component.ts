import { Component, Input, Output, OnInit, OnChanges, EventEmitter, HostListener } from '@angular/core';
import { CentralSocketService } from '../central-socket.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class ChatboxComponent implements OnChanges {
  //target's username and user's username are passed in from user-selection.component
  @Input() targetUsername = '';
  @Input() myUserName = '';
  @Input() myAvatarURL = '';
  @Output() closeChatbox = new EventEmitter<boolean>();

  formMessage: String;
  messages: Array<any>;
  socket: SocketIOClient.Socket;

  constructor(private centralSocket: CentralSocketService) { 
    this.socket = centralSocket.getSocket();
  }
  
  markAllAsSeen(){
    var self = this;
    var roomName;
    if(self.myUserName<self.targetUsername){
      roomName = self.myUserName+":"+self.targetUsername;
    }
    else{
      roomName = self.targetUsername+":"+self.myUserName;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/markAllAsSeen?roomName='+roomName+"&targetName="+self.myUserName, true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.centralSocket.getSocket().emit("deleteFromNotificationList", {name: self.targetUsername});
      }
    }
    xhr.send();
  }
  
  onClick(event) {
    this.markAllAsSeen();
  }
  
  send(){
    var self = this;
    console.log(self.formMessage);

    var message = {
      fromUsername: self.myUserName,
      toUsername: self.targetUsername,
      fromAvatar: self.myAvatarURL,
      msg: self.formMessage
    };

    //Sends the chat to the server with the event name 'message-to-server' (see server.js)
    this.centralSocket.getSocket().emit('message-to-server', message);

    //Sends a notification to the recipient of a new unread message
    this.centralSocket.getSocket().emit('addToNotificationList', {toUsername: this.targetUsername, name: this.myUserName});
    
  }

  getAllChats(){
    var self = this;
    var roomName;
    if(self.myUserName<self.targetUsername){
      roomName = self.myUserName+":"+self.targetUsername;
    }
    else{
      roomName = self.targetUsername+":"+self.myUserName;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/getAllChats?roomName='+roomName, true);
    xhr.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        self.messages = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
  }

  closeChat() {
    // window.location.replace("http://localhost:4200/selection/");
    this.closeChatbox.emit(false);
    debugger;
  }

  
  ngOnChanges() {
    this.getAllChats(); //Get all previous chats on changes
    this.centralSocket.reconnect(); //Reconnects to room - fixes bug when you chat with many different people on a short interval
    
    var self = this;
    this.messages = new Array();

    //listens for a socket connection, then makes the socket join a "room". The room contains only 2 people, the current socket, and the target socket, and thus is named myUsername:targetUsername as well as targetUsername:myUsername for 2-way assurance

    this.centralSocket.getSocket().on('connect', () => {

      var roomName;
      //Room name is the concatenation of both usernames in lexicographical order
      if(self.myUserName<self.targetUsername){
        roomName = self.myUserName+":"+self.targetUsername;
      }
      else{
        roomName = self.targetUsername+":"+self.myUserName;
      }

      self.centralSocket.getSocket().emit('joinRooms', {
        name: roomName,
        self: this.myUserName
      });

    });

    this.centralSocket.getSocket().on('message-to-clients', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
    });

  }

}
