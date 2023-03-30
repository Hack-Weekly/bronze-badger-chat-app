import {Body, Controller, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse} from '@nestjs/swagger';
import {Types} from 'mongoose';
import {Message} from '../../conversation/domain/entity/message';
import {ConversationService} from '../../conversation/service/conversation.service';
import {CurrentUser} from '../../auth/util/currentUser.decorator';
import {ParseObjectIdPipe} from '../../common/pipes/parse-object-id.pipe';
import {Conversation} from '../../conversation/domain/entity/conversation';
import {CreateMessageDTO} from '../../conversation/domain/dto/createMessageDTO';
import {JwtAuthGuard} from '../../auth/guard/jwt.guard';
import {CreateConversationDto} from '../../conversation/domain/dto/createConversationDTO';

@ApiTags('conversations')
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@Controller()
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}

    @ApiCreatedResponse({type: String, description: 'Return created object id'})
    @Post()
    async createConversation(
        @Body() createConversationDto: CreateConversationDto,
        @CurrentUser() currentUser
    ): Promise<string> {
        const currentUserId = new Types.ObjectId(currentUser.userId);

        const id = await this.conversationService.createConversation(createConversationDto, currentUserId);
        return id.toString();
    }

    @ApiOkResponse({type: [Message], description: 'Returns conversation messages'})
    @Get('/:id/messages')
    async getMessagesByConversationId(
        @Param('id', ParseObjectIdPipe) conversationId: Types.ObjectId
    ): Promise<Message[]> {
        return await this.conversationService.getMessagesByConversationId(conversationId);
    }

    // TODO should return whole users instead of userIds - ConversationDTO
    @ApiOkResponse({type: [Conversation], description: 'Returns current user conversation'})
    @Get()
    async getUserConversations(@CurrentUser() user): Promise<Conversation[]> {
        return await this.conversationService.getUserConversations(user.userId);
    }

    // TODO updateUserMetaDTO
    @Put('/:id/updateUserMeta')
    async updateConversationUserMeta(
        @Param('id', ParseObjectIdPipe) conversationId: Types.ObjectId,
        @CurrentUser('userId') user
    ): Promise<void> {
        await this.conversationService.updateConversationUserMeta(conversationId, user.userId);
    }

    @Post('message')
    async createMessage(@Body() createMessageDto: CreateMessageDTO, @CurrentUser() currentUser): Promise<Message> {
        return await this.conversationService.createMessage(createMessageDto, currentUser.userId);
    }
}
