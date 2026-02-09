import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
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

export const QuestionSchema = SchemaFactory.createForClass(Question);
