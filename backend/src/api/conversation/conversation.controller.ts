import { Body, Controller, Get, HttpException, HttpStatus, Param, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Types, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageSchema } from '../../conversation/domain/entity/message';
import { ConversationService } from '../../conversation/service/conversation.service';
import { CurrentUser } from '../../auth/util/currentUser.decorator';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';
import { CreateConversationDto } from '../../conversation/domain/dto/create-conversation.dto';
import { Conversation } from '../../conversation/domain/entity/conversation';
import { CreateMessageDTO } from '../../conversation/domain/dto/createMessageDTO';
import {JwtAuthGuard} from '../../auth/guard/jwt.guard';

@ApiTags('conversations')
@Controller('conversations')
export class ConversationController {
  constructor(
    private readonly conversationService: ConversationService,
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  @Put()
  @UseGuards(JwtAuthGuard)
  async createConversation(
    @Body() createConversationDto: CreateConversationDto,
    @CurrentUser() currentUser,
  ) {
    const recipientId = new Types.ObjectId(createConversationDto.recipientId);
    const currentUserId = currentUser.userId;

    const conversation = await this.conversationService.findConversationByIdAndUserId(
      currentUserId,
      recipientId,
    );
    if (conversation) {
      throw new HttpException('Conversation already exists', HttpStatus.BAD_REQUEST);
    }

    const newConversation = await this.conversationService.createConversation([
      currentUserId,
      recipientId,
    ]);
    return newConversation;
  }

  @Get(':id/messages')
  async getMessagesByConversationId(
    @Param('id', ParseObjectIdPipe) conversationId: Types.ObjectId,
  ): Promise<Message[]> {
    return await this.messageModel.find({ conversation: conversationId }).exec();
  }

  @Get('user/:id/conversations')
  async getUserConversations(
    @Param('id', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<Conversation[]> {
    return await this.conversationService.getUserConversations(userId);
  }

  @Put(':conversationId/users/:userId/meta')
  async updateConversationUserMeta(
    @Param('conversationId', ParseObjectIdPipe) conversationId: Types.ObjectId,
    @Param('userId', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<void> {
    await this.conversationService.updateConversationUserMeta(conversationId, userId);
  }

  @Put(':conversationId/messages')
  async createMessage(
  @Param('conversationId', ParseObjectIdPipe) conversationId: Types.ObjectId,
  @Body() createMessageDto: CreateMessageDTO,
  @CurrentUser() currentUser,
): Promise<Message> {
  const userId = currentUser.userId;
  createMessageDto.conversationId = conversationId.toString();
  return await this.conversationService.createMessage(createMessageDto, userId);
  }
}
