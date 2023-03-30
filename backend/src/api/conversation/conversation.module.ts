import {Module} from '@nestjs/common';
import {ConversationController} from './conversation.controller';
import {ConversationModule} from '../../conversation/conversation.module';

@Module({
    imports: [ConversationModule],
    controllers: [ConversationController],
})
export class ConversationControllerModule {}
