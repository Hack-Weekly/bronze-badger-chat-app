import {Controller} from '@nestjs/common';
import {Types} from 'mongoose';

@Controller()
export class ConversationController {
    getConversations() {}

    createConversation() {}

    getMessages(conversationId: Types.ObjectId) {}
}
