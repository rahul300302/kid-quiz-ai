import { Module } from '@nestjs/common';
import { MongoModule } from './database/mongo.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { TestsModule } from './tests/tests.module';
import { QuestionsModule } from './questions/questions.module';
import { AttemptsModule } from './attempts/attempts.module';
import { MetricsModule } from './metrics/metrics.module';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './AI/ai.module';
import { WebhookModule } from './webhook/webhook.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }), MongoModule, UsersModule, CoursesModule, LessonsModule, TestsModule, QuestionsModule, AttemptsModule, MetricsModule, AiModule, WebhookModule],

})

export class AppModule { } 
