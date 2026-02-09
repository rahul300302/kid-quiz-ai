import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { TestStatus } from '../common/enums';

@Controller('tests')
export class TestsController {
    constructor(private readonly testsService: TestsService) { }

    @Post()
    create(@Body() createTestDto: CreateTestDto) {
        return this.testsService.create(createTestDto);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('status') status?: TestStatus,
        @Query('search') search?: string,
        @Query('userId') userId?: string,
    ) {
        return this.testsService.findAll(page, limit, status, search, userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testsService.remove(id);
    }
}
