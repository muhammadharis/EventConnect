import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnChanges {
  //target's username and user's username are passed in from user-selection.component
  @Input() targetUsername = '';
  @Input() myUserName = '';
  formMessage: String;
  messages: Array<any>;
  socket: SocketIOClient.Socket;

  constructor() { 
    this.socket = io.connect();
  }
  send(){
    var self = this;
    console.log(self.formMessage);
    var message = {
      fromUsername: self.myUserName,
      toUsername: self.targetUsername,
      msg: self.formMessage
    };

    //Sends the chat to the server with the event name 'message-to-server' (see server.js)
    this.socket.emit('message-to-server', message);
  }
  ngOnChanges() {
    this.socket = io.connect(); //Reconnects to room - fixes bug when you chat with many different people on a short interval
    var self = this;
    this.messages = new Array();

    //listens for a socket connection, then makes the socket join a "room". The room contains only 2 people, the current socket, and the target socket, and thus is named myUsername:targetUsername as well as targetUsername:myUsername for 2-way assurance

    this.socket.on('connect', () => {
      self.socket.emit('joinRoom', {
        name: self.myUserName+":"+self.targetUsername
      });
      self.socket.emit('joinRoom', {
        name: self.targetUsername+":"+self.myUserName
      })
    });

    this.socket.on('message-to-clients', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
    });
  }

}
