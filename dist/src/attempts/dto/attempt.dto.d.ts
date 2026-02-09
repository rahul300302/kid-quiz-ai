import { AttemptStatus } from '../../common/enums';
export declare class CreateTestAttemptDto {
    testId: string;
    studentId: string;
    totalQuestions: number;
}
export declare class UpdateTestAttemptDto {
    status?: AttemptStatus;
    basicScore?: number;
}
