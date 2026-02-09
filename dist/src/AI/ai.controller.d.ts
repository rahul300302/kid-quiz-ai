import { AiService } from './ai.service';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    getGreeting(): {
        message: string;
    };
    analyzeDocument(files: Array<Express.Multer.File>, texts?: string, clarificationAnswer?: string): Promise<{
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
    extractQuestions(files: Array<Express.Multer.File>, questionCount?: string, topicsStr?: string): Promise<{
        questions: {
            questionText: string;
            order: number;
            correctAnswer: string;
            hints: string[];
            microLearning: string;
        }[];
    }>;
    generateHints(body: {
        questionText: string;
        correctAnswer: string;
    }): Promise<{
        hints: string[];
    }>;
    generateMicroLearning(body: {
        questionText: string;
        correctAnswer: string;
    }): Promise<{
        microLearning: string;
    }>;
}
