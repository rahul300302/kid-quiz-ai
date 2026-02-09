import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
export declare class LessonsController {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    create(createLessonDto: CreateLessonDto): Promise<import("./schemas/lesson.schema").Lesson>;
    findAll(): Promise<import("./schemas/lesson.schema").Lesson[]>;
    findOne(id: string): Promise<import("./schemas/lesson.schema").Lesson>;
    remove(id: string): Promise<void>;
}
