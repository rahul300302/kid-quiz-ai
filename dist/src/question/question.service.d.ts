import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
export declare class QuestionService {
    private userModel;
    constructor(userModel: Model<QuestionDocument>);
    createQuestion(data: any): Promise<Question>;
    findAll(): Promise<Question[]>;
    findOne(id: string): Promise<Question>;
    updateQuestion(id: string, data: any): Promise<Question>;
    removeQuestion(id: string): Promise<{
        message: string;
    }>;
}
