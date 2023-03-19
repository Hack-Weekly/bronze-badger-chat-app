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
    UseGuards
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
import {Types} from "mongoose";
import {ParseObjectIdPipe} from "../../validator/parseObjectId.pipe";

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiBearerAuth()
    @ApiQuery({
        name: "page",
        required: false,
    })
    @ApiQuery({
        name: "size",
        required: false,
    })
    @ApiQuery({
        name: "search",
        required: false,
    })
    @Get()
    @ApiOkResponse({type: Pageable})
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    async getUserPage(
        @Query('page', new DefaultValuePipe(0)) page: number,
        @Query('size', new DefaultValuePipe(10)) size: number,
        @Query('search', new DefaultValuePipe('')) searchParam: string
    ) {
        return await this.userService.getUserPage(page, size, searchParam)
    }


    @ApiBearerAuth()
    @ApiOkResponse({
        type: User,
    })
    @ApiUnauthorizedResponse()
    @Get('current')
    @UseGuards(JwtAuthGuard)
    async getCurrentUser(@CurrentUser() current) {
        return await this.userService.findUserById(current.userId)
    }

    @ApiCreatedResponse()
    @ApiBadRequestResponse({
        type: ValidationErrorResponse
    })
    @Post()
    async createUser(@Body() user: CreateUserDto) {
        await this.userService.createUser(user);
    }

    @ApiBearerAuth()
    @Delete()
    @ApiUnauthorizedResponse()
    @ApiNoContentResponse()
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async selfDelete(@CurrentUser() user) {
        await this.userService.deleteUser(user.userId);
    }

    @ApiBearerAuth()
    @ApiOkResponse({
        type: User,
    })
    @ApiBadRequestResponse()
    @ApiUnauthorizedResponse()
    @ApiParam({name: 'id', type: String})
    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    async getUser(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
        return await this.userService.findUserById(id);
     }

}
