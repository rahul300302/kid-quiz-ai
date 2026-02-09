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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceMetricsSchema = exports.PerformanceMetrics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PerformanceMetrics = class PerformanceMetrics {
    studentId;
    testId;
    averageBasicScore;
    averageAiScore;
    totalAttempts;
    improvementRate;
    consistencyScore;
    averageHintUsage;
    averageLearningEngagement;
    averageTimeEfficiency;
    strongTopics;
    weakTopics;
    calculatedAt;
};
exports.PerformanceMetrics = PerformanceMetrics;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PerformanceMetrics.prototype, "studentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Test' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PerformanceMetrics.prototype, "testId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "averageBasicScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "averageAiScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "totalAttempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "improvementRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "consistencyScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "averageHintUsage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "averageLearningEngagement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], PerformanceMetrics.prototype, "averageTimeEfficiency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], PerformanceMetrics.prototype, "strongTopics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], PerformanceMetrics.prototype, "weakTopics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], PerformanceMetrics.prototype, "calculatedAt", void 0);
exports.PerformanceMetrics = PerformanceMetrics = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PerformanceMetrics);
exports.PerformanceMetricsSchema = mongoose_1.SchemaFactory.createForClass(PerformanceMetrics);
//# sourceMappingURL=performance-metrics.schema.js.map