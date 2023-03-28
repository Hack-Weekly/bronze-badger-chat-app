import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Query,
    UseGuards,
    Injectable
} from '@nestjs/common';
import {JwtAuthGuard} from '../../auth/guard/jwt.guard';
import {CreateUserDto} from '../../auth/domain/dto/create-user-dto';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiParam,
    ApiQuery,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import {UsersService} from "../../auth/service/user.service";
import {CurrentUser} from "../../auth/util/currentUser.decorator";
import {User} from "../../auth/domain/entity/user";
import {Pageable} from "../../util/pageable";
import {ValidationErrorResponse} from "../../util/validationErrorResponse";
import {Types, Model} from "mongoose";
import {InjectModel} from '@nestjs/mongoose';
import {Message} from './message.model';
import {ParseObjectIdPipe} from "../../validator/parseObjectId.pipe";

@ApiTags('conversations')
@Controller('conversations')
export class ConversationController {
    constructor(
        private conversationService: ConversationService,
        @InjectModel('Message') private readonly messageModel: Model<Message>
    ) {}
        
    @Put()
    @UseGuards(JwtAuthGuard)
    async createConversation(
        @Body() createConversationDto: CreateConversationDto,
        @CurrentUser() currentUser,
    ) {
        const recipientId = createConversationDto.recipientId;
        const currentUserId = currentUser.userId;

        const conversation = await this.conversationService.findConversation(currentUserId, recipientId);
        if (conversation) {
            throw new HttpException('Conversation already exists', HttpStatus.BAD_REQUEST);
        }

        const newConversation = await this.conversationService.createConversation(currentUserId, recipientId);
        return newConversation;
    }

    @Get(':id/messages')
    async getMessagesByConversationId(
        @Param('id', new ParseObjectIdPipe()) conversationId: Types.ObjectId
    ): Promise<Message[]> {
        return await this.messageModel.find({ conversation: conversationId }).exec();
    }
}
