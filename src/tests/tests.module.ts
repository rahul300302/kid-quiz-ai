import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { Test, TestSchema } from './schemas/test.schema';
import { Question, QuestionSchema } from '../questions/schemas/question.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Test.name, schema: TestSchema },
            { name: Question.name, schema: QuestionSchema }
        ])
    ],
    controllers: [TestsController],
    providers: [TestsService],
    exports: [TestsService],
})
export class TestsModule { }
