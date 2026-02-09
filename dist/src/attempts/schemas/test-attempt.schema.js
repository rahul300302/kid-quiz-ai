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
exports.TestAttemptSchema = exports.TestAttempt = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enums_1 = require("../../common/enums");
let TestAttempt = class TestAttempt {
    testId;
    studentId;
    startedAt;
    completedAt;
    status;
    basicScore;
    aiScore;
    aiScoreBreakdown;
    totalQuestions;
    correctAnswers;
    hintsUsed;
    timeTakenSeconds;
    learningEngagementRate;
    averageTimePerQuestion;
    firstAttemptSuccessRate;
    hintDependencyRate;
    persistenceScore;
    confidenceIndicator;
    forcedStudyBreaks;
    masteryAchieved;
    questionsRequiringStudy;
};
exports.TestAttempt = TestAttempt;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Test', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], TestAttempt.prototype, "testId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], TestAttempt.prototype, "studentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], TestAttempt.prototype, "startedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], TestAttempt.prototype, "completedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.AttemptStatus, default: enums_1.AttemptStatus.IN_PROGRESS }),
    __metadata("design:type", String)
], TestAttempt.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "basicScore", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "aiScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], TestAttempt.prototype, "aiScoreBreakdown", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "totalQuestions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "correctAnswers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "hintsUsed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "timeTakenSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "learningEngagementRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "averageTimePerQuestion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "firstAttemptSuccessRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "hintDependencyRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "persistenceScore", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TestAttempt.prototype, "confidenceIndicator", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "forcedStudyBreaks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TestAttempt.prototype, "masteryAchieved", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "questionsRequiringStudy", void 0);
exports.TestAttempt = TestAttempt = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], TestAttempt);
exports.TestAttemptSchema = mongoose_1.SchemaFactory.createForClass(TestAttempt);
//# sourceMappingURL=test-attempt.schema.js.map