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
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const ai_service_1 = require("./ai.service");
let AiController = class AiController {
    aiService;
    constructor(aiService) {
        this.aiService = aiService;
    }
    getGreeting() {
        return { message: 'Use AI to generate learning materials!' };
    }
    async analyzeDocument(files, texts, clarificationAnswer) {
        if ((!files || files.length === 0) && (!texts || texts.length === 0)) {
            throw new common_1.BadRequestException('No files or text provided.');
        }
        let combinedTextContent = '';
        if (texts) {
            try {
                const parsedTexts = JSON.parse(texts);
                for (const item of parsedTexts) {
                    combinedTextContent += `\n--- SOURCE: ${item.name} ---\n${item.content}\n`;
                }
            }
            catch (e) {
                console.error('Failed to parse texts from body', e);
            }
        }
        if (files && files.length > 0) {
            for (const file of files) {
                const fileText = await this.aiService.parseFile(file.buffer, file.originalname);
                combinedTextContent += `\n--- SOURCE: ${file.originalname} ---\n${fileText}\n`;
            }
        }
        if (!combinedTextContent || !combinedTextContent.trim()) {
            throw new common_1.BadRequestException('Content is empty or could not be read.');
        }
        return this.aiService.analyzeDocumentContent(combinedTextContent, clarificationAnswer);
    }
    async extractQuestions(files, questionCount, topicsStr) {
        if (!files || files.length === 0) {
            throw new common_1.BadRequestException('No files provided.');
        }
        const count = questionCount ? parseInt(questionCount, 10) : 5;
        let combinedTextContent = '';
        for (const file of files) {
            const fileText = await this.aiService.parseFile(file.buffer, file.originalname);
            combinedTextContent += `\n--- SOURCE: ${file.originalname} ---\n${fileText}\n`;
        }
        if (!combinedTextContent || !combinedTextContent.trim()) {
            throw new common_1.BadRequestException('Files content is empty or could not be read.');
        }
        const topics = topicsStr ? JSON.parse(topicsStr) : undefined;
        return this.aiService.extractQuestionsFromText(combinedTextContent, count, topics);
    }
    async generateHints(body) {
        if (!body.questionText || !body.correctAnswer) {
            throw new common_1.BadRequestException('Question text and correct answer are required.');
        }
        return this.aiService.generateHintsForQuestion(body.questionText, body.correctAnswer);
    }
    async generateMicroLearning(body) {
        if (!body.questionText || !body.correctAnswer) {
            throw new common_1.BadRequestException('Question text and correct answer are required.');
        }
        return this.aiService.generateMicroLearningForQuestion(body.questionText, body.correctAnswer);
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiController.prototype, "getGreeting", null);
__decorate([
    (0, common_1.Post)('analyze-document'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)('texts')),
    __param(2, (0, common_1.Body)('clarificationAnswer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "analyzeDocument", null);
__decorate([
    (0, common_1.Post)('extract-questions'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)('questionCount')),
    __param(2, (0, common_1.Body)('topics')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "extractQuestions", null);
__decorate([
    (0, common_1.Post)('generate-hints'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateHints", null);
__decorate([
    (0, common_1.Post)('generate-micro-learning'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateMicroLearning", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=ai.controller.js.map