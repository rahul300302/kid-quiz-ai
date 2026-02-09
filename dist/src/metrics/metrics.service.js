"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const performance_metrics_schema_1 = require("./schemas/performance-metrics.schema");
let MetricsService = class MetricsService {
    metricsModel;
    constructor(metricsModel) {
        this.metricsModel = metricsModel;
    }
    async create(createPerformanceMetricsDto) {
        return this.metricsModel.create(createPerformanceMetricsDto);
    }
    async findByStudent(studentId) {
        return this.metricsModel.find({ studentId }).exec();
    }
    async findOne(id) {
        const metrics = await this.metricsModel.findById(id).exec();
        if (!metrics)
            throw new common_1.NotFoundException('Metrics not found');
        return metrics;
    }
};
exports.MetricsService = MetricsService;
exports.MetricsService = MetricsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(performance_metrics_schema_1.PerformanceMetrics.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MetricsService);
//# sourceMappingURL=metrics.service.js.map