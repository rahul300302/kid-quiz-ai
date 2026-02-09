import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttemptsController } from './attempts.controller';
import { AttemptsService } from './attempts.service';
import { TestAttempt, TestAttemptSchema } from './schemas/test-attempt.schema';
import { QuestionAttempt, QuestionAttemptSchema } from './schemas/question-attempt.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: TestAttempt.name, schema: TestAttemptSchema },
            { name: QuestionAttempt.name, schema: QuestionAttemptSchema }
        ])
    ],
    controllers: [AttemptsController],
    providers: [AttemptsService],
    exports: [AttemptsService],
})
export class AttemptsModule { }
