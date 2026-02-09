import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TestStatus } from '../../common/enums';

export type TestDocument = Test & Document;

@Schema({ timestamps: true })
export class Test {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    scheduledDate: Date;

    @Prop({ enum: TestStatus, default: TestStatus.DRAFT })
    status: string;

    @Prop({ default: 0 })
    questionCount: number;

    @Prop({ required: true })
    duration: number; // in minutes

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Lesson' })
    lessonId: Types.ObjectId;
}

export const TestSchema = SchemaFactory.createForClass(Test);
