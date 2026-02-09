import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) { }

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseModel.create(createCourseDto);
    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find().exec();
    }

    async findOne(id: string): Promise<Course> {
        const course = await this.courseModel.findById(id).exec();
        if (!course) throw new NotFoundException('Course not found');
        return course;
    }
}
