import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from '../../auth/guard/local.guard';
import {ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse} from "@nestjs/swagger";
import {Credentials} from "../../auth/domain/dto/credentials";
import {AuthService} from "../../auth/service/auth.service";
import {CurrentUser} from "../../auth/util/currentUser.decorator";
import {User} from "../../auth/domain/entity/user";

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiCreatedResponse()
    @ApiUnauthorizedResponse()
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@CurrentUser() user: User, @Body() credentials: Credentials) {
        return await this.authService.login(user);
    }
}
