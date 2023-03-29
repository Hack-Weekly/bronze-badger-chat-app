import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')  // Needs implementation
  handleMessage(client: any, payload: any): string {     
    return 'Example of AppGateway';
  }
}
