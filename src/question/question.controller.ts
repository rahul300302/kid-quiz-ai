import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { ClerkAuthGuard } from '../config/clerkAuthentication';
import { ConfigService } from '@nestjs/config';


@Controller('question')
export class QuestionController {
    constructor(
        private readonly usersService: QuestionService,
        private readonly configService: ConfigService) { }

    @Post()         
    createQuestion(@Body() data: any) {
        return this.usersService.createQuestion(data);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    updateQuestion(@Param('id') id: string, @Body() data: any) {
        return this.usersService.updateQuestion(id, data);
    }

    @Delete(':id')
    removeQuestion(@Param('id') id: string) {
        return this.usersService.removeQuestion(id);
    }
}
