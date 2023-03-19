import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import {User, UserDocument} from '../domain/entity/user';
import * as bcrypt from 'bcrypt';
import {ConfigService} from '@nestjs/config';
import {CreateUserDto} from "../domain/dto/create-user-dto";
import {Pageable} from "../../util/pageable";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private configService: ConfigService) {}

    async getUserPage(page: number, size: number, searchTerm: string): Promise<Pageable<User>> {
        const users = await this.userModel
            .find({
                username: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })
            .sort({username: 1})
            .skip(size * page)
            .limit(size)
            .lean()
            .exec();

        return new Pageable<User>({
            content: users.map(user => new User(user)),
            pageSize: size,
            pageNumber: page,
        });
    }

    async findUserById(id: Types.ObjectId): Promise<User | undefined> {
        const user = await this.userModel.findById(id).lean().exec();
        if (user) {
            return new User(user);
        }
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.userModel
            .findOne({
                email,
            }).lean().exec()

        if (user) {
            return new User(user);
        }
    }

    async deleteUser(id: string): Promise<void> {
        await this.userModel.deleteOne({_id: id}).exec();
    }


    async createUser(createUserDTO: CreateUserDto): Promise<void> {
        const password = await this.hashPassword(createUserDTO.password);
        const user = new this.userModel({username: createUserDTO.username, email: createUserDTO.email, password});
        await user.save();
    }

    async hashPassword(password): Promise<string> {
        const saltRounds = this.configService.get('SALT_ROUNDS');
        const salt = await bcrypt.genSalt(Number(saltRounds));
        return await bcrypt.hash(password, salt);
    }
}
