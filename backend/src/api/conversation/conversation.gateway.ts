import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Logger} from '@nestjs/common';
import {Server} from 'socket.io';
import {AuthSocket} from '../../socket/socket.types';

@WebSocketGateway()
export class ConversationGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private server: Server;
    private logger: Logger = new Logger('AppGateway');

    constructor() {}

    async handleConnection(@ConnectedSocket() client: AuthSocket): Promise<void> {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(@ConnectedSocket() client: AuthSocket): void {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('sendMessage')
    async handleMessage(@ConnectedSocket() client: AuthSocket): Promise<void> {}
}
