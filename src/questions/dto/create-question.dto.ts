import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
    @IsNotEmpty()
    @IsString()
    testId: string;

    @IsNotEmpty()
    @IsString()
    questionText: string;

    @IsNotEmpty()
    @IsString()
    correctAnswer: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    hints?: string[];

    @IsOptional()
    @IsString()
    microLearning?: string;

    @IsNotEmpty()
    @IsNumber()
    order: number;

    @IsOptional()
    @IsNumber()
    maxAttemptsBeforeStudy?: number;
}
