import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsString()
    fileName: string;

    @IsNotEmpty()
    @IsString()
    fileUrl: string;

    @IsNotEmpty()
    @IsString()
    fileType: string;

    @IsNotEmpty()
    @IsString()
    uploadedBy: string; // ID of the user
}
