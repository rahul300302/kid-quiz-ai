import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test, TestDocument } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { Question, QuestionDocument } from '../questions/schemas/question.schema';
import { TestStatus } from '../common/enums';

@Injectable()
export class TestsService {
    constructor(
        @InjectModel(Test.name) private testModel: Model<TestDocument>,
        @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    ) { }

    async create(createTestDto: CreateTestDto): Promise<Test> {
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

    async findAll(
        page: number = 1,
        limit: number = 10,
        status?: TestStatus,
        search?: string,
        userId?: string
    ): Promise<{ data: Test[]; pagination: any }> {
        const skip = (page - 1) * limit;
        const filter: any = {};

        if (status) {
            filter.status = status;
        }

        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }

        // If you want to filter by user (e.g. only show own tests)
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

    async findOne(id: string): Promise<Test> {
        const test = await this.testModel.findById(id).exec();
        if (!test) throw new NotFoundException('Test not found');
        return test;
    }

    async remove(id: string): Promise<void> {
        const result = await this.testModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException('Test not found');
        await this.questionModel.deleteMany({ testId: id }).exec();
    }
}
