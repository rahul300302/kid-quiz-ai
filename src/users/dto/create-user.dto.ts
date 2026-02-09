import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsNotEmpty()
  clerkId: string;

  @IsOptional()
  role?: string;

  @IsOptional()
  avatarUrl?: string;

  @IsOptional()
  @IsNumber()
  grade?: number;
}
