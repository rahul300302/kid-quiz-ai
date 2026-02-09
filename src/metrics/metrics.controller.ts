import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreatePerformanceMetricsDto } from './dto/create-metrics.dto';

@Controller('metrics')
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) { }

    @Post()
    create(@Body() createPerformanceMetricsDto: CreatePerformanceMetricsDto) {
        return this.metricsService.create(createPerformanceMetricsDto);
    }

    @Get(':studentId')
    findByStudent(@Param('studentId') studentId: string) {
        return this.metricsService.findByStudent(studentId);
    }
}
