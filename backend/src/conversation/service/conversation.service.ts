import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Model, Types} from 'mongoose';
import {CreateMessageDTO} from '../domain/dto/createMessageDTO';
import {InjectModel} from '@nestjs/mongoose';
import {Conversation, ConversationDocument} from '../domain/entity/conversation';
import {Message, MessageDocument} from '../domain/entity/message';
import {ConversationUserMeta, ConversationUserMetaDocument} from '../domain/entity/conversationUserMeta';

@Injectable()
export class ConversationService {
    constructor(
        @InjectModel(Conversation.name) private conversationModel: Model<ConversationDocument>,
        @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
        @InjectModel(ConversationUserMeta.name) private conversationUserMetaModel: Model<ConversationUserMetaDocument>
    ) {}

    // todo mozda bi bilo dobro odmah connectati userId na usere - aggregate
    // todo - dohvatiti i poslati zadnji message
    // todo - get unread messages count
    async getUserConversations(userId: Types.ObjectId) {
        const conversations = await this.conversationModel
            .find({userIds: {$all: [userId]}})
            .lean()
            .exec();

        return conversations.map((conversation) => new Conversation(conversation));
    }

    async findConversationByIdAndUserId(conversationId: Types.ObjectId, userId: Types.ObjectId) {
        return await this.conversationModel
            .findOne({_id: conversationId, userIds: {$all: [userId]}})
            .lean()
            .exec();
    }

    async createConversation(userIds: Types.ObjectId[]) {
        const conversation = new this.conversationModel({userIds});
        await conversation.save();
    }

    async updateConversationUserMeta(conversationId: Types.ObjectId, userId: Types.ObjectId) {
        const conversationUserMeta = await this.conversationUserMetaModel.findOne({conversationId, userId}).exec();
        if (!conversationUserMeta) {
            throw new BadRequestException(`Invalid params conversationId: ${conversationId}, userId: ${userId}`);
        }

        await conversationUserMeta.save();
    }

    async createMessage(message: CreateMessageDTO, userId: Types.ObjectId) {
        const conversationId = new Types.ObjectId(message.conversationId);
        const isPartOfConversation = await this.findConversationByIdAndUserId(conversationId, userId);
        if (!isPartOfConversation) {
            throw new UnauthorizedException(`User is not a part of conversation: ${message.conversationId}`);
        }

        const newMessage = new this.messageModel({...message, conversationId, userId});
        const savedMessage = await newMessage.save();
        return new Message(savedMessage);
    }

    async getMessagesByConversationId(conversationId: Types.ObjectId) {
        const messages = await this.messageModel.find({conversationId}).lean().exec();
        return messages.map((message) => new Message(message));
    }
}
