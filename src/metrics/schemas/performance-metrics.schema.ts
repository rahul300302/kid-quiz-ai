import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PerformanceMetricsDocument = PerformanceMetrics & Document;

@Schema({ timestamps: true })
export class PerformanceMetrics {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    studentId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Test' })
    testId: Types.ObjectId;

    @Prop({ default: 0 })
    averageBasicScore: number;

    @Prop({ default: 0 })
    averageAiScore: number;

    @Prop({ default: 0 })
    totalAttempts: number;

    @Prop({ default: 0 })
    improvementRate: number;

    @Prop({ default: 0 })
    consistencyScore: number;

    @Prop({ default: 0 })
    averageHintUsage: number;

    @Prop({ default: 0 })
    averageLearningEngagement: number;

    @Prop({ default: 0 })
    averageTimeEfficiency: number;

    @Prop({ type: [String] })
    strongTopics: string[];

    @Prop({ type: [String] })
    weakTopics: string[];

    @Prop({ default: Date.now })
    calculatedAt: Date;
}

export const PerformanceMetricsSchema = SchemaFactory.createForClass(PerformanceMetrics);
