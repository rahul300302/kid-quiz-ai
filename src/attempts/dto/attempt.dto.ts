import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { AttemptStatus } from '../../common/enums';

export class CreateTestAttemptDto {
    @IsNotEmpty()
    @IsString()
    testId: string;

    @IsNotEmpty()
    @IsString()
    studentId: string;

    @IsNotEmpty()
    @IsNumber()
    totalQuestions: number;
}

export class UpdateTestAttemptDto {
    @IsOptional()
    @IsEnum(AttemptStatus)
    status?: AttemptStatus;

    @IsOptional()
    @IsNumber()
    basicScore?: number;

    // Add other fields as needed for updates (metrics usually calculated by backend)
}
