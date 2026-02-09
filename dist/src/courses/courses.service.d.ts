import { Model } from 'mongoose';
import { Course, CourseDocument } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesService {
    private courseModel;
    constructor(courseModel: Model<CourseDocument>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
}
