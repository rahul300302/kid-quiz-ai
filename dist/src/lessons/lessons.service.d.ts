import { Model } from 'mongoose';
import { Lesson, LessonDocument } from './schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';
export declare class LessonsService {
    private lessonModel;
    constructor(lessonModel: Model<LessonDocument>);
    create(createLessonDto: CreateLessonDto): Promise<Lesson>;
    findAll(): Promise<Lesson[]>;
    findOne(id: string): Promise<Lesson>;
    remove(id: string): Promise<void>;
}
