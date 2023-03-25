import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Conversation, ConversationSchema} from './domain/entity/conversation';
import {Message, MessageSchema} from './domain/entity/message';
import {ConversationUserMeta, ConversationUserMetaSchema} from './domain/entity/conversationUserMeta';
import {ConversationService} from './service/conversation.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Conversation.name, schema: ConversationSchema},
            {name: Message.name, schema: MessageSchema},
            {name: ConversationUserMeta.name, schema: ConversationUserMetaSchema},
        ]),
    ],
    providers: [ConversationService],
    exports: [ConversationService],
})
export class ConversationModule {}
