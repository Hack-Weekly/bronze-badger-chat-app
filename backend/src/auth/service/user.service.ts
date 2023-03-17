import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, UserDocument} from '../domain/entity/user';
import * as bcrypt from 'bcrypt';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private configService: ConfigService) {}

    async findUserById(id: string): Promise<UserDocument | undefined> {
        return this.userModel.findById(id).lean();
    }

    async findUserByEmail(email: string): Promise<UserDocument | undefined> {
        return this.userModel
            .findOne({
                email,
            })
            .lean();
    }

    async hashPassword(password): Promise<string> {
        const saltRounds = this.configService.get('SALT_ROUNDS');
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    }
}
