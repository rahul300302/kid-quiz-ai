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
exports.QuestionAttemptSchema = exports.QuestionAttempt = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let QuestionAttempt = class QuestionAttempt {
    attemptId;
    questionId;
    studentAnswer;
    isCorrect;
    attemptsCount;
    timeTakenSeconds;
    timeBeforeFirstAttempt;
    hintsUsed;
    hintSequence;
    timeSpentOnHints;
    viewedMicroLearning;
    microLearningViewedBefore;
    microLearningTimeSpent;
    answeredOnFirstAttempt;
    usedNoHints;
    showedPersistence;
    studyMaterialDownloaded;
    downloadedAt;
    retriesAfterStudy;
    mustStudyBeforeRetry;
};
exports.QuestionAttempt = QuestionAttempt;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'TestAttempt', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], QuestionAttempt.prototype, "attemptId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Question', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], QuestionAttempt.prototype, "questionId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QuestionAttempt.prototype, "studentAnswer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "isCorrect", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "attemptsCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "timeTakenSeconds", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "timeBeforeFirstAttempt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "hintsUsed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Number] }),
    __metadata("design:type", Array)
], QuestionAttempt.prototype, "hintSequence", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "timeSpentOnHints", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "viewedMicroLearning", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "microLearningViewedBefore", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "microLearningTimeSpent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "answeredOnFirstAttempt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "usedNoHints", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "showedPersistence", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "studyMaterialDownloaded", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], QuestionAttempt.prototype, "downloadedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionAttempt.prototype, "retriesAfterStudy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionAttempt.prototype, "mustStudyBeforeRetry", void 0);
exports.QuestionAttempt = QuestionAttempt = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], QuestionAttempt);
exports.QuestionAttemptSchema = mongoose_1.SchemaFactory.createForClass(QuestionAttempt);
//# sourceMappingURL=question-attempt.schema.js.map