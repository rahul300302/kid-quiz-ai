import { TestStatus } from '../../common/enums';
import { CreateQuestionDto } from '../../questions/dto/create-question.dto';
declare const CreateQuestionNestedDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateQuestionDto, "testId">>;
export declare class CreateQuestionNestedDto extends CreateQuestionNestedDto_base {
}
export declare class CreateTestDto {
    title: string;
    description: string;
    scheduledDate: Date;
    status?: TestStatus;
    duration: number;
    createdBy: string;
    lessonId?: string;
    questions: CreateQuestionNestedDto[];
}
export {};
