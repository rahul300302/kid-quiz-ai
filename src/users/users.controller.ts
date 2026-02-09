import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // CREATE USER
    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    // GET ALL USERS
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    // LOGIN / CHECK USER EXISTS (by clerkId)
    @Post('login')
    login(@Body('clerkId') clerkId: string) {
        return this.usersService.login(clerkId);
    }

    // GET USER BY ID
    @Get('me/:id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    // UPDATE USER
    @Patch(':id')
    updateUser(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.updateUser(id, dto);
    }

    // DELETE USER
    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return this.usersService.removeUser(id);
    }
}
