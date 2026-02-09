import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformanceMetrics, PerformanceMetricsDocument } from './schemas/performance-metrics.schema';
import { CreatePerformanceMetricsDto } from './dto/create-metrics.dto';

@Injectable()
export class MetricsService {
    constructor(@InjectModel(PerformanceMetrics.name) private metricsModel: Model<PerformanceMetricsDocument>) { }

    async create(createPerformanceMetricsDto: CreatePerformanceMetricsDto): Promise<PerformanceMetrics> {
        return this.metricsModel.create(createPerformanceMetricsDto);
    }

    async findByStudent(studentId: string): Promise<PerformanceMetrics[]> {
        return this.metricsModel.find({ studentId }).exec();
    }

    async findOne(id: string): Promise<PerformanceMetrics> {
        const metrics = await this.metricsModel.findById(id).exec();
        if (!metrics) throw new NotFoundException('Metrics not found');
        return metrics;
    }
}
