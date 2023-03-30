import {INestApplicationContext, Logger} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {IoAdapter} from '@nestjs/platform-socket.io';
import {Server, ServerOptions} from 'socket.io';
import {AuthSocket} from './socket.types';

export class SocketIOAdapter extends IoAdapter {
    private readonly logger = new Logger(SocketIOAdapter.name);
    constructor(private app: INestApplicationContext) {
        super(app);
    }

    createIOServer(port: number, options?: ServerOptions): Server {
        const cors = {
            origin: '*',
        };

        this.logger.log('Configuring SocketIO server with custom CORS options', {
            cors,
        });

        const optionsWithCORS: ServerOptions = {
            ...options,
            cors,
        };

        const jwtService = this.app.get(JwtService);
        const server: Server = super.createIOServer(port, optionsWithCORS);

        server.use(createTokenMiddleware(jwtService, this.logger));

        return server;
    }
}

const createTokenMiddleware = (jwtService: JwtService, logger: Logger) => (socket: AuthSocket, next) => {
    const token = socket.handshake.auth.token;

    try {
        const payload = jwtService.verify(token);
        socket.userId = payload.sub;
        next();
    } catch (e) {
        logger.error(e.message());
        next(new Error('FORBIDDEN'));
    }
};
