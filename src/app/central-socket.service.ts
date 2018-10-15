import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CentralSocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect();
  }
  reconnect(){
    this.socket.disconnect();
    this.socket.connect();
  }
  getSocket(){
    return this.socket;
  }
}
