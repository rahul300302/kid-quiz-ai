import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AttemptStatus } from '../../common/enums';

export type TestAttemptDocument = TestAttempt & Document;

@Schema({ timestamps: true })
export class TestAttempt {
    @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
    testId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    studentId: Types.ObjectId;

    @Prop({ default: Date.now })
    startedAt: Date;

    @Prop()
    completedAt: Date;

    @Prop({ enum: AttemptStatus, default: AttemptStatus.IN_PROGRESS })
    status: string;

    @Prop()
    basicScore: number;

    @Prop()
    aiScore: number;

    @Prop({ type: Object })
    aiScoreBreakdown: any;

    @Prop({ required: true })
    totalQuestions: number;

    @Prop({ default: 0 })
    correctAnswers: number;

    @Prop({ default: 0 })
    hintsUsed: number;

    @Prop()
    timeTakenSeconds: number;

    // Behavioral Analytics
    @Prop()
    learningEngagementRate: number;

    @Prop()
    averageTimePerQuestion: number;

    @Prop()
    firstAttemptSuccessRate: number;

    @Prop()
    hintDependencyRate: number;

    @Prop()
    persistenceScore: number;

    @Prop()
    confidenceIndicator: number;

    // Mastery-Based Learning
    @Prop({ default: 0 })
    forcedStudyBreaks: number;

    @Prop({ default: false })
    masteryAchieved: boolean;

    @Prop({ default: 0 })
    questionsRequiringStudy: number;
}

export const TestAttemptSchema = SchemaFactory.createForClass(TestAttempt);
