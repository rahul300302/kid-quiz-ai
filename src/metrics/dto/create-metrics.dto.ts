import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePerformanceMetricsDto {
    @IsNotEmpty()
    @IsString()
    studentId: string;

    @IsOptional()
    @IsString()
    testId?: string;

    @IsOptional()
    @IsNumber()
    averageBasicScore?: number;

    @IsOptional()
    @IsNumber()
    averageAiScore?: number;
}
