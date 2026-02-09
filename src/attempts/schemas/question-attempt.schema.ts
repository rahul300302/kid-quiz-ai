import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type QuestionAttemptDocument = QuestionAttempt & Document;

@Schema({ timestamps: true })
export class QuestionAttempt {
    @Prop({ type: Types.ObjectId, ref: 'TestAttempt', required: true })
    attemptId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Question', required: true })
    questionId: Types.ObjectId;

    @Prop({ required: true })
    studentAnswer: string;

    @Prop({ required: true })
    isCorrect: boolean;

    @Prop({ default: 1 })
    attemptsCount: number;

    @Prop({ required: true })
    timeTakenSeconds: number;

    @Prop()
    timeBeforeFirstAttempt: number;

    @Prop({ default: 0 })
    hintsUsed: number;

    @Prop({ type: [Number] })
    hintSequence: number[];

    @Prop()
    timeSpentOnHints: number;

    @Prop({ default: false })
    viewedMicroLearning: boolean;

    @Prop({ default: false })
    microLearningViewedBefore: boolean;

    @Prop()
    microLearningTimeSpent: number;

    @Prop({ default: false })
    answeredOnFirstAttempt: boolean;

    @Prop({ default: true })
    usedNoHints: boolean;

    @Prop({ default: false })
    showedPersistence: boolean;

    @Prop({ default: false })
    studyMaterialDownloaded: boolean;

    @Prop()
    downloadedAt: Date;

    @Prop({ default: 0 })
    retriesAfterStudy: number;

    @Prop({ default: false })
    mustStudyBeforeRetry: boolean;
}

export const QuestionAttemptSchema = SchemaFactory.createForClass(QuestionAttempt);
