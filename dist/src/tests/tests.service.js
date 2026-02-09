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
exports.TestsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const test_schema_1 = require("./schemas/test.schema");
const question_schema_1 = require("../questions/schemas/question.schema");
let TestsService = class TestsService {
    testModel;
    questionModel;
    constructor(testModel, questionModel) {
        this.testModel = testModel;
        this.questionModel = questionModel;
    }
    async create(createTestDto) {
        const { questions, ...testData } = createTestDto;
        const createdTest = await this.testModel.create({
            ...testData,
            questionCount: questions?.length || 0,
        });
        if (questions && questions.length > 0) {
            const questionsToCreate = questions.map((q) => ({
                ...q,
                testId: createdTest._id,
            }));
            await this.questionModel.insertMany(questionsToCreate);
        }
        return createdTest;
    }
    async findAll(page = 1, limit = 10, status, search, userId) {
        const skip = (page - 1) * limit;
        const filter = {};
        if (status) {
            filter.status = status;
        }
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }
        if (userId) {
            filter.createdBy = userId;
        }
        const [data, total] = await Promise.all([
            this.testModel
                .find(filter)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .populate('createdBy', 'name email')
                .populate('lessonId', 'title')
                .exec(),
            this.testModel.countDocuments(filter).exec(),
        ]);
        return {
            data,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const test = await this.testModel.findById(id).exec();
        if (!test)
            throw new common_1.NotFoundException('Test not found');
        return test;
    }
    async remove(id) {
        const result = await this.testModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException('Test not found');
        await this.questionModel.deleteMany({ testId: id }).exec();
    }
};
exports.TestsService = TestsService;
exports.TestsService = TestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(test_schema_1.Test.name)),
    __param(1, (0, mongoose_1.InjectModel)(question_schema_1.Question.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TestsService);
//# sourceMappingURL=tests.service.js.map