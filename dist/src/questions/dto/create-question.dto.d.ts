export declare class CreateQuestionDto {
    testId: string;
    questionText: string;
    correctAnswer: string;
    hints?: string[];
    microLearning?: string;
    order: number;
    maxAttemptsBeforeStudy?: number;
}
