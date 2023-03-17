import {Body, Controller, DefaultValuePipe, Delete, Get, Param, Post, Query, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from '../../auth/guard/jwt.guard';
import {CreateUserDto} from '../../auth/domain/dto/create-user-dto';

@Controller('users')
export class UsersController {
    constructor() {}

    @Get()
    @UseGuards(JwtAuthGuard)
    getUserPage(
        @Query('page', new DefaultValuePipe(0)) page: number,
        @Query('size', new DefaultValuePipe(0)) size: number,
        @Query('serch', new DefaultValuePipe('')) serchParam: string
    ) {
        // TODO return user page with search param
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    getUser(@Param('id') userId: string) {
        // TODO return user
    }

    @Get('current')
    @UseGuards(JwtAuthGuard)
    getCurrentUser() {
        // TODO return current user - get user from req object (make user decorator to make it cleaner)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // TODO create/register user - finish creating CreateUserDto class - add fields and validators
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    selfDelete() {
        // todo soft delete request maker (available from req token)
    }
}
