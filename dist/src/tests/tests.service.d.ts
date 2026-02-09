import { Model } from 'mongoose';
import { Test, TestDocument } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { QuestionDocument } from '../questions/schemas/question.schema';
import { TestStatus } from '../common/enums';
export declare class TestsService {
    private testModel;
    private questionModel;
    constructor(testModel: Model<TestDocument>, questionModel: Model<QuestionDocument>);
    create(createTestDto: CreateTestDto): Promise<Test>;
    findAll(page?: number, limit?: number, status?: TestStatus, search?: string, userId?: string): Promise<{
        data: Test[];
        pagination: any;
    }>;
    findOne(id: string): Promise<Test>;
    remove(id: string): Promise<void>;
}
