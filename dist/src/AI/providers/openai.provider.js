"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openai_1 = __importDefault(require("openai"));
let OpenAIProvider = class OpenAIProvider {
    configService;
    client;
    constructor(configService) {
        this.configService = configService;
        this.client = new openai_1.default({
            apiKey: this.configService.getOrThrow('OPENAI_API_KEY'),
        });
    }
    async generateStructuredQuiz(prompt) {
        try {
            const response = await this.client.responses.create({
                model: 'gpt-4o',
                input: [
                    {
                        role: 'system',
                        content: 'You are a highly skilled educational content analyzer and structured quiz generator. Always return valid JSON.',
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                max_output_tokens: 1500,
            });
            return response.output_text;
        }
        catch (error) {
            console.error('OpenAI Error:', error);
            throw new common_1.InternalServerErrorException('AI generation failed');
        }
    }
};
exports.OpenAIProvider = OpenAIProvider;
exports.OpenAIProvider = OpenAIProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OpenAIProvider);
//# sourceMappingURL=openai.provider.js.map