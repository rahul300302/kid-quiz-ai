import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { PerformanceMetrics, PerformanceMetricsSchema } from './schemas/performance-metrics.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PerformanceMetrics.name, schema: PerformanceMetricsSchema }])
    ],
    controllers: [MetricsController],
    providers: [MetricsService],
    exports: [MetricsService],
})
export class MetricsModule { }
