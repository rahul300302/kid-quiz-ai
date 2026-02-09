import { Model } from 'mongoose';
import { TestAttempt, TestAttemptDocument } from './schemas/test-attempt.schema';
import { QuestionAttempt, QuestionAttemptDocument } from './schemas/question-attempt.schema';
import { CreateTestAttemptDto, UpdateTestAttemptDto } from './dto/attempt.dto';
export declare class AttemptsService {
    private testAttemptModel;
    private questionAttemptModel;
    constructor(testAttemptModel: Model<TestAttemptDocument>, questionAttemptModel: Model<QuestionAttemptDocument>);
    create(createTestAttemptDto: CreateTestAttemptDto): Promise<TestAttempt>;
    findAll(): Promise<TestAttempt[]>;
    findOne(id: string): Promise<TestAttempt>;
    update(id: string, updateTestAttemptDto: UpdateTestAttemptDto): Promise<TestAttempt>;
    submitAnswer(attemptId: string, answerData: any): Promise<QuestionAttempt>;
}
