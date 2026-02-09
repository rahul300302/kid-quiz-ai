import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
    @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
    testId: Types.ObjectId;

    @Prop({ required: true })
    questionText: string;

    @Prop({ required: true })
    correctAnswer: string;

    @Prop({ type: [String] })
    hints: string[];

    @Prop()
    microLearning: string;

    @Prop({ required: true })
    order: number;

    @Prop({ default: 4 })
    maxAttemptsBeforeStudy: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
