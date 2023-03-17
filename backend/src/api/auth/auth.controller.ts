import {Controller, Get, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from '../../auth/guard/local.guard';

@Controller()
export class AuthController {
    constructor() {}

    @Get('login')
    @UseGuards(LocalAuthGuard)
    login() {
        // TODO return auth token
    }
}
