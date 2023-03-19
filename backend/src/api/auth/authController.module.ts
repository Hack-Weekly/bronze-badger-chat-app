import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {AuthController} from './auth.controller';
import {AuthModule} from "../../auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [UsersController, AuthController],
})
export class AuthControllerModule {}
