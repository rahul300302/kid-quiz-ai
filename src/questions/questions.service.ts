import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        return this.questionModel.create(createQuestionDto);
    }

    async findAll(): Promise<Question[]> {
        return this.questionModel.find().exec();
    }

    async findByTest(testId: string): Promise<Question[]> {
        return this.questionModel.find({ testId }).sort({ order: 1 }).exec();
    }

    async findOne(id: string): Promise<Question> {
        const question = await this.questionModel.findById(id).exec();
        if (!question) throw new NotFoundException('Question not found');
        return question;
    }

    async remove(id: string): Promise<void> {
        const result = await this.questionModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException('Question not found');
    }
}
