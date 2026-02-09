import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
export declare class QuestionsService {
    private questionModel;
    constructor(questionModel: Model<QuestionDocument>);
    create(createQuestionDto: CreateQuestionDto): Promise<Question>;
    findAll(): Promise<Question[]>;
    findByTest(testId: string): Promise<Question[]>;
    findOne(id: string): Promise<Question>;
    remove(id: string): Promise<void>;
}
