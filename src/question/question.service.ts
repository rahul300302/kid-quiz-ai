import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';


@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private userModel: Model<QuestionDocument>,
  ) {}

  // CREATE
  async createQuestion(data: any): Promise<Question> {
    return await this.userModel.create(data);
  }

  // READ ALL
  async findAll(): Promise<Question[]> {
    return await this.userModel.find().exec();
  }

  // READ ONE
  async findOne(id: string): Promise<Question> {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // UPDATE
  async updateQuestion(id: string, data:any): Promise<Question> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      data,
      { new: true },
    );

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // DELETE
  async removeQuestion(id: string): Promise<{ message: string }> {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('User not found');

    return { message: 'User deleted successfully' };
  }
}
