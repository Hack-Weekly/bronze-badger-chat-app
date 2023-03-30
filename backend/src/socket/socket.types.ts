import {Socket} from 'socket.io';

export type AuthSocket = Socket & {userId: string};
