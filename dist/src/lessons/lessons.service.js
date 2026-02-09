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
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lesson_schema_1 = require("./schemas/lesson.schema");
let LessonsService = class LessonsService {
    lessonModel;
    constructor(lessonModel) {
        this.lessonModel = lessonModel;
    }
    async create(createLessonDto) {
        return this.lessonModel.create(createLessonDto);
    }
    async findAll() {
        return this.lessonModel.find().exec();
    }
    async findOne(id) {
        const lesson = await this.lessonModel.findById(id).exec();
        if (!lesson)
            throw new common_1.NotFoundException('Lesson not found');
        return lesson;
    }
    async remove(id) {
        const result = await this.lessonModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException('Lesson not found');
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lesson_schema_1.Lesson.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map