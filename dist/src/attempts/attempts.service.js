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
exports.AttemptsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const test_attempt_schema_1 = require("./schemas/test-attempt.schema");
const question_attempt_schema_1 = require("./schemas/question-attempt.schema");
let AttemptsService = class AttemptsService {
    testAttemptModel;
    questionAttemptModel;
    constructor(testAttemptModel, questionAttemptModel) {
        this.testAttemptModel = testAttemptModel;
        this.questionAttemptModel = questionAttemptModel;
    }
    async create(createTestAttemptDto) {
        return this.testAttemptModel.create(createTestAttemptDto);
    }
    async findAll() {
        return this.testAttemptModel.find().exec();
    }
    async findOne(id) {
        const attempt = await this.testAttemptModel.findById(id).exec();
        if (!attempt)
            throw new common_1.NotFoundException('Test Attempt not found');
        return attempt;
    }
    async update(id, updateTestAttemptDto) {
        const attempt = await this.testAttemptModel.findByIdAndUpdate(id, updateTestAttemptDto, { new: true }).exec();
        if (!attempt)
            throw new common_1.NotFoundException('Test Attempt not found');
        return attempt;
    }
    async submitAnswer(attemptId, answerData) {
        const questionAttempt = await this.questionAttemptModel.create({
            attemptId,
            ...answerData
        });
        return questionAttempt;
    }
};
exports.AttemptsService = AttemptsService;
exports.AttemptsService = AttemptsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(test_attempt_schema_1.TestAttempt.name)),
    __param(1, (0, mongoose_1.InjectModel)(question_attempt_schema_1.QuestionAttempt.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AttemptsService);
//# sourceMappingURL=attempts.service.js.map