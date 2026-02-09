import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestAttempt, TestAttemptDocument } from './schemas/test-attempt.schema';
import { QuestionAttempt, QuestionAttemptDocument } from './schemas/question-attempt.schema';
import { CreateTestAttemptDto, UpdateTestAttemptDto } from './dto/attempt.dto';

@Injectable()
export class AttemptsService {
    constructor(
        @InjectModel(TestAttempt.name) private testAttemptModel: Model<TestAttemptDocument>,
        @InjectModel(QuestionAttempt.name) private questionAttemptModel: Model<QuestionAttemptDocument>
    ) { }

    async create(createTestAttemptDto: CreateTestAttemptDto): Promise<TestAttempt> {
        return this.testAttemptModel.create(createTestAttemptDto);
    }

    async findAll(): Promise<TestAttempt[]> {
        return this.testAttemptModel.find().exec();
    }

    async findOne(id: string): Promise<TestAttempt> {
        const attempt = await this.testAttemptModel.findById(id).exec();
        if (!attempt) throw new NotFoundException('Test Attempt not found');
        return attempt;
    }

    async update(id: string, updateTestAttemptDto: UpdateTestAttemptDto): Promise<TestAttempt> {
        const attempt = await this.testAttemptModel.findByIdAndUpdate(id, updateTestAttemptDto, { new: true }).exec();
        if (!attempt) throw new NotFoundException('Test Attempt not found');
        return attempt;
    }

    // Placeholder for submitting a question answer - this would require a specific DTO
    async submitAnswer(attemptId: string, answerData: any): Promise<QuestionAttempt> {
        // Logic to save question attempt and update test attempt metrics would go here
        const questionAttempt = await this.questionAttemptModel.create({
            attemptId,
            ...answerData
        });
        return questionAttempt;
    }
}
