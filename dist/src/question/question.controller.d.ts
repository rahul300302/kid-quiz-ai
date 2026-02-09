import { QuestionService } from './question.service';
import { ConfigService } from '@nestjs/config';
export declare class QuestionController {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: QuestionService, configService: ConfigService);
    createQuestion(data: any): Promise<import("./schemas/question.schema").Question>;
    findAll(): Promise<import("./schemas/question.schema").Question[]>;
    findOne(id: string): Promise<import("./schemas/question.schema").Question>;
    updateQuestion(id: string, data: any): Promise<import("./schemas/question.schema").Question>;
    removeQuestion(id: string): Promise<{
        message: string;
    }>;
}
