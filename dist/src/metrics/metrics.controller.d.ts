import { MetricsService } from './metrics.service';
import { CreatePerformanceMetricsDto } from './dto/create-metrics.dto';
export declare class MetricsController {
    private readonly metricsService;
    constructor(metricsService: MetricsService);
    create(createPerformanceMetricsDto: CreatePerformanceMetricsDto): Promise<import("./schemas/performance-metrics.schema").PerformanceMetrics>;
    findByStudent(studentId: string): Promise<import("./schemas/performance-metrics.schema").PerformanceMetrics[]>;
}
