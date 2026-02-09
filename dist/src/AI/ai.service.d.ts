import { ConfigService } from '@nestjs/config';
export declare class AiService {
    private readonly config;
    constructor(config: ConfigService);
    analyzeDocumentContent(textContent: string, clarificationAnswer?: string): Promise<{
        type: "lesson" | "test" | "solution";
        greeting: string;
        analysis: string;
        topics: {
            id: string;
            title: string;
            description: string;
            difficulty: "easy" | "medium" | "hard";
            estimatedQuestions: number;
        }[];
        suggestedQuestionCount: number;
        clarification: {
            question: string;
            options: string[];
        } | null;
    }>;
    extractQuestionsFromText(textContent: string, count: number, topics?: string[]): Promise<{
        questions: {
            questionText: string;
            order: number;
            correctAnswer: string;
            hints: string[];
            microLearning: string;
        }[];
    }>;
    generateHintsForQuestion(questionText: string, correctAnswer: string): Promise<{
        hints: string[];
    }>;
    generateMicroLearningForQuestion(questionText: string, correctAnswer: string): Promise<{
        microLearning: string;
    }>;
    parseFile(fileBuffer: Buffer, fileName: string): Promise<string>;
}
