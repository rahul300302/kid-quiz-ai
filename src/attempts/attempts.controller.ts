import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AttemptsService } from './attempts.service';
import { CreateTestAttemptDto, UpdateTestAttemptDto } from './dto/attempt.dto';

@Controller('attempts')
export class AttemptsController {
    constructor(private readonly attemptsService: AttemptsService) { }

    @Post()
    create(@Body() createTestAttemptDto: CreateTestAttemptDto) {
        return this.attemptsService.create(createTestAttemptDto);
    }

    @Get()
    findAll() {
        return this.attemptsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.attemptsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTestAttemptDto: UpdateTestAttemptDto) {
        return this.attemptsService.update(id, updateTestAttemptDto);
    }
}
