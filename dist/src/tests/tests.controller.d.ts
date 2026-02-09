import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { TestStatus } from '../common/enums';
export declare class TestsController {
    private readonly testsService;
    constructor(testsService: TestsService);
    create(createTestDto: CreateTestDto): Promise<import("./schemas/test.schema").Test>;
    findAll(page?: number, limit?: number, status?: TestStatus, search?: string, userId?: string): Promise<{
        data: import("./schemas/test.schema").Test[];
        pagination: any;
    }>;
    findOne(id: string): Promise<import("./schemas/test.schema").Test>;
    remove(id: string): Promise<void>;
}
