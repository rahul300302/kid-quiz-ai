import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  // CREATE
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  // READ ALL
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // CHECK USER EXIST OR NOT
  async login(clerkId: string): Promise<User> {
    const user = await this.userModel.findOne({ clerkId }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // READ ONE
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ clerkId: id }).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // UPDATE
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // DELETE
  async removeUser(id: string): Promise<{ message: string }> {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('User not found');

    return { message: 'User deleted successfully' };
  }

  // UPSERT USER FROM WEBHOOK
  async upsertUserFromWebhook(createUserDto: Partial<CreateUserDto>): Promise<User> {
    const { clerkId } = createUserDto;
    if (!clerkId) throw new Error('clerkId is required');

    const user = await this.userModel.findOneAndUpdate(
      { clerkId },
      createUserDto,
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );
    return user;
  }
}
