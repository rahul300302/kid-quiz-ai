import {
    Controller,
    Get,
    Post,
    Body,
    UploadedFiles,
    UseInterceptors,
    BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) { }

    @Get()
    getGreeting() {
        return { message: 'Use AI to generate learning materials!' };
    }

    @Post('analyze-document')
    @UseInterceptors(FilesInterceptor('files'))
    async analyzeDocument(
        @UploadedFiles() files: Array<Express.Multer.File>,
        @Body('texts') texts?: string,
        @Body('clarificationAnswer') clarificationAnswer?: string,
    ) {
        if ((!files || files.length === 0) && (!texts || texts.length === 0)) {
            throw new BadRequestException('No files or text provided.');
        }

        let combinedTextContent = '';

        if (texts) {
            try {
                const parsedTexts = JSON.parse(texts) as {
                    name: string;
                    content: string;
                }[];
                for (const item of parsedTexts) {
                    combinedTextContent += `\n--- SOURCE: ${item.name} ---\n${item.content}\n`;
                }
            } catch (e) {
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
            throw new BadRequestException('Content is empty or could not be read.');
        }

        return this.aiService.analyzeDocumentContent(
            combinedTextContent,
            clarificationAnswer,
        );
    }

    @Post('extract-questions')
    @UseInterceptors(FilesInterceptor('files'))
    async extractQuestions(
        @UploadedFiles() files: Array<Express.Multer.File>,
        @Body('questionCount') questionCount?: string,
        @Body('topics') topicsStr?: string,
    ) {
        if (!files || files.length === 0) {
            throw new BadRequestException('No files provided.');
        }

        const count = questionCount ? parseInt(questionCount, 10) : 5;
        let combinedTextContent = '';

        for (const file of files) {
            const fileText = await this.aiService.parseFile(file.buffer, file.originalname);
            combinedTextContent += `\n--- SOURCE: ${file.originalname} ---\n${fileText}\n`;
        }

        if (!combinedTextContent || !combinedTextContent.trim()) {
            throw new BadRequestException('Files content is empty or could not be read.');
        }

        const topics = topicsStr ? JSON.parse(topicsStr) : undefined;

        return this.aiService.extractQuestionsFromText(
            combinedTextContent,
            count,
            topics,
        );
    }

    @Post('generate-hints')
    async generateHints(@Body() body: { questionText: string; correctAnswer: string }) {
        if (!body.questionText || !body.correctAnswer) {
            throw new BadRequestException('Question text and correct answer are required.');
        }
        return this.aiService.generateHintsForQuestion(
            body.questionText,
            body.correctAnswer,
        );
    }

    @Post('generate-micro-learning')
    async generateMicroLearning(@Body() body: { questionText: string; correctAnswer: string }) {
        if (!body.questionText || !body.correctAnswer) {
            throw new BadRequestException('Question text and correct answer are required.');
        }
        return this.aiService.generateMicroLearningForQuestion(
            body.questionText,
            body.correctAnswer,
        );
    }
}

