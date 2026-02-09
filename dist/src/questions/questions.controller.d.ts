import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    create(createQuestionDto: CreateQuestionDto): Promise<import("./schemas/question.schema").Question>;
    findAll(testId?: string): Promise<import("./schemas/question.schema").Question[]>;
    findOne(id: string): Promise<import("./schemas/question.schema").Question>;
    remove(id: string): Promise<void>;
}
