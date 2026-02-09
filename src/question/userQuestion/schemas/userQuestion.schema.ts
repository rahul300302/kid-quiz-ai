import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserQuestionDocument = UserQuestion & Document;

@Schema({ timestamps: true })
export class UserQuestion {
    @Prop({ required: true, unique: true })
    clerkUserId: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    age: number;

    @Prop({ type: Types.ObjectId, ref: 'Course' })
    course: Types.ObjectId;
}

export const UserQuestionSchema = SchemaFactory.createForClass(UserQuestion);
