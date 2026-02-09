import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    clerkId: string;

    @Prop({ unique: true, sparse: true })
    email: string;

    @Prop()
    name: string;

    @Prop({ enum: ['ADMIN', 'STUDENT'], default: 'STUDENT' })
    role: string;

    @Prop()
    avatarUrl: string;

    @Prop()
    grade: number;

    @Prop({ default: Date.now })
    lastActiveAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
