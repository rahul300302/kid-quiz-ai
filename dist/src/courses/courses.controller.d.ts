import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto): Promise<import("./schemas/course.schema").Course>;
    findAll(): Promise<import("./schemas/course.schema").Course[]>;
    findOne(id: string): Promise<import("./schemas/course.schema").Course>;
}
