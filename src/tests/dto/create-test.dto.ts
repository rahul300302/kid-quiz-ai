import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { TestStatus } from '../../common/enums';
import { CreateQuestionDto } from '../../questions/dto/create-question.dto';
import { OmitType } from '@nestjs/mapped-types';

export class CreateQuestionNestedDto extends OmitType(CreateQuestionDto, ['testId'] as const) { }

export class CreateTestDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDateString()
    scheduledDate: Date;

    @IsOptional()
    @IsEnum(TestStatus)
    status?: TestStatus;

    @IsNotEmpty()
    @IsNumber()
    duration: number;

    @IsNotEmpty()
    @IsString()
    createdBy: string;

    @IsOptional()
    @IsString()
    lessonId?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateQuestionNestedDto)
    questions: CreateQuestionNestedDto[];
}
