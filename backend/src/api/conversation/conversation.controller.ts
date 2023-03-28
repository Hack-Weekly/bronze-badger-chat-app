import { Body, Controller, HttpException, HttpStatus, Param, Put, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt.guard';
import { CreateConversationDto } from '../../conversation/domain/dto/create-conversation.dto';
import { ApiTags } from '@nestjs/swagger';
import { Types, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageSchema } from '../../conversation/domain/entity/message';
import { ConversationService } from '../../conversation/service/conversation.service';
import { CurrentUser } from '../../auth/util/currentUser.decorator'; // Import the CurrentUser decorator

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
    const recipientId = createConversationDto.recipientId;
    const currentUserId = currentUser.userId;

    const conversation = await this.conversationService.findConversationByIdAndUserId(
      currentUserId,
      recipientId,
    );
    if (conversation) {
      throw new HttpException('Conversation already exists', HttpStatus.BAD_REQUEST);
    }

    const newConversation = await this.conversationService.createConversation(
      currentUserId,
      recipientId,
    );
    return newConversation;
  }

  @Get(':id/messages')
  async getMessagesByConversationId(
    @Param('id', ParseObjectIdPipe) conversationId: Types.ObjectId,
  ): Promise<Message[]> {
    return await this.messageModel.find({ conversation: conversationId }).exec();
  }
}
