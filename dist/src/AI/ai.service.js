"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ai_1 = require("ai");
const openai_1 = require("@ai-sdk/openai");
const zod_1 = require("zod");
const officeParser = __importStar(require("officeparser"));
let AiService = class AiService {
    config;
    constructor(config) {
        this.config = config;
    }
    async analyzeDocumentContent(textContent, clarificationAnswer) {
        console.log("jhi", textContent);
        const maxLength = 100000;
        const truncatedText = textContent.length > maxLength
            ? textContent.substring(0, maxLength) + '...'
            : textContent;
        const { output } = await (0, ai_1.generateText)({
            model: (0, openai_1.openai)('gpt-4o'),
            output: ai_1.Output.object({
                name: 'analysis',
                description: 'Analysis of the document',
                schema: zod_1.z.object({
                    type: zod_1.z.enum(['lesson', 'test', 'solution']),
                    greeting: zod_1.z.string(),
                    analysis: zod_1.z.string(),
                    topics: zod_1.z.array(zod_1.z.object({
                        id: zod_1.z.string(),
                        title: zod_1.z.string(),
                        description: zod_1.z.string(),
                        difficulty: zod_1.z.enum(['easy', 'medium', 'hard']),
                        estimatedQuestions: zod_1.z.number(),
                    })),
                    suggestedQuestionCount: zod_1.z.number(),
                    clarification: zod_1.z
                        .object({
                        question: zod_1.z.string(),
                        options: zod_1.z.array(zod_1.z.string()).length(4),
                    })
                        .nullable(),
                }),
            }),
            prompt: `Act as a smart, friendly, and expert elementary school teacher (pedagogue). 
      Analyze the following educational content provided by another teacher.
      
      CONTENT:
      ${truncatedText}
  
      ${clarificationAnswer
                ? `TEACHER'S CLARIFICATION: "${clarificationAnswer}" \n\n(Use this clarification to refine your analysis and be specific).`
                : ''}
      
      YOUR GOALS:
      1. Identify if this is a lesson/textbook, a test sheet, or a solution key.
      2. Deeply scan for distinct educational topics and sub-topics.
      3. Generate a human-like, warm greeting and short analysis summary.
      4. Provide a list of specific topics that can be turned into a quiz.
      
      CLARIFICATION LOGIC:
      - If the content is ambiguous or could be interpreted in multiple ways (e.g., "History" could be "Ancient Rome" or "World War II"), ASK A CLARIFICATION QUESTION.
      - Provide exactly 4 options: 3 specific likely interpretations and the 4th option MUST be "Other".
      - If you are asking for clarification, the 'topics' array can be empty or generic.
      - IF NO CLARIFICATION IS NEEDED, SET 'clarification' TO NULL.
      
      BE SMART: 
      - If it's a math book, don't just say "Math". Say "Adding Single Digits", "Intro to Fractions", etc. 
      - Act like you are talking to a colleague. Use a professional yet very friendly tone.
      - If it's for 5-10 year olds, keep the topics simple and clear.`,
        });
        console.log("output", output);
        return output;
    }
    async extractQuestionsFromText(textContent, count, topics) {
        console.log(textContent, count, topics, 'toopic');
        const maxLength = 100000;
        const truncatedText = textContent.length > maxLength
            ? textContent.substring(0, maxLength) + '...'
            : textContent;
        const { output } = await (0, ai_1.generateText)({
            model: (0, openai_1.openai)('gpt-4o'),
            output: ai_1.Output.object({
                name: 'questions',
                description: 'List of questions',
                schema: zod_1.z.object({
                    questions: zod_1.z.array(zod_1.z.object({
                        questionText: zod_1.z.string(),
                        order: zod_1.z.number(),
                        correctAnswer: zod_1.z.string(),
                        hints: zod_1.z.array(zod_1.z.string()),
                        microLearning: zod_1.z.string(),
                    })),
                }),
            }),
            prompt: `Act as a fun and expert elementary school teacher. Generate ${count} super engaging quiz questions for kids aged 5-10 from the following text. 
      
      ${topics && topics.length > 0 ? `IMPORTANT: Focus ONLY on the following selected topics: ${topics.join(', ')}.` : ''}
  
      Requirements:
      1. Use very simple, child-friendly vocabulary.
      2. Use fill-in-the-blank format with "__BLANK__" for a single key word.
      3. Make it fun and educational!
      4. Provide exactly ${count} questions.
  
      Text:
      ${truncatedText}`,
        });
        return output;
    }
    async generateHintsForQuestion(questionText, correctAnswer) {
        const { output } = await (0, ai_1.generateText)({
            model: (0, openai_1.openai)('gpt-4o'),
            output: ai_1.Output.object({
                name: 'hints',
                description: 'List of hints',
                schema: zod_1.z.object({
                    hints: zod_1.z.array(zod_1.z.string()).length(3),
                }),
            }),
            prompt: `Act as a helpful teacher for 5-10 year olds. Generate three very simple and fun hints for the following quiz question. Make them easier as they go!
  
      Question: ${questionText}
      Answer: ${correctAnswer}`,
        });
        return output;
    }
    async generateMicroLearningForQuestion(questionText, correctAnswer) {
        const { output } = await (0, ai_1.generateText)({
            model: (0, openai_1.openai)('gpt-4o'),
            output: ai_1.Output.object({
                name: 'microLearning',
                description: 'Micro learning for the question',
                schema: zod_1.z.object({
                    microLearning: zod_1.z.string(),
                }),
            }),
            prompt: `Act as a fun teacher for 5-10 year olds. Generate a super simple, 2-sentence explanation of the topic for the following quiz question. Use "Did you know?" style and make it exciting!
  
      Question: ${questionText}
      Answer: ${correctAnswer}`,
        });
        return output;
    }
    async parseFile(fileBuffer, fileName) {
        try {
            const parsedData = await officeParser.parseOffice(fileBuffer);
            return typeof parsedData === 'string'
                ? parsedData
                : JSON.stringify(parsedData);
        }
        catch (error) {
            console.error(`officeParser error for ${fileName}:`, error);
            return fileBuffer.toString('utf-8');
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AiService);
//# sourceMappingURL=ai.service.js.map