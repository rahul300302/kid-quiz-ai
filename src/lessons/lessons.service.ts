import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from './schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonsService {
    constructor(@InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>) { }

    async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
        return this.lessonModel.create(createLessonDto);
    }

    async findAll(): Promise<Lesson[]> {
        return this.lessonModel.find().exec();
    }

    async findOne(id: string): Promise<Lesson> {
        const lesson = await this.lessonModel.findById(id).exec();
        if (!lesson) throw new NotFoundException('Lesson not found');
        return lesson;
    }

    async remove(id: string): Promise<void> {
        const result = await this.lessonModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException('Lesson not found');
    }
}
