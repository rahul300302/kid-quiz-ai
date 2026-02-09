import { AttemptsService } from './attempts.service';
import { CreateTestAttemptDto, UpdateTestAttemptDto } from './dto/attempt.dto';
export declare class AttemptsController {
    private readonly attemptsService;
    constructor(attemptsService: AttemptsService);
    create(createTestAttemptDto: CreateTestAttemptDto): Promise<import("./schemas/test-attempt.schema").TestAttempt>;
    findAll(): Promise<import("./schemas/test-attempt.schema").TestAttempt[]>;
    findOne(id: string): Promise<import("./schemas/test-attempt.schema").TestAttempt>;
    update(id: string, updateTestAttemptDto: UpdateTestAttemptDto): Promise<import("./schemas/test-attempt.schema").TestAttempt>;
}
