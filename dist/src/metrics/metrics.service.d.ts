import { Model } from 'mongoose';
import { PerformanceMetrics, PerformanceMetricsDocument } from './schemas/performance-metrics.schema';
import { CreatePerformanceMetricsDto } from './dto/create-metrics.dto';
export declare class MetricsService {
    private metricsModel;
    constructor(metricsModel: Model<PerformanceMetricsDocument>);
    create(createPerformanceMetricsDto: CreatePerformanceMetricsDto): Promise<PerformanceMetrics>;
    findByStudent(studentId: string): Promise<PerformanceMetrics[]>;
    findOne(id: string): Promise<PerformanceMetrics>;
}
