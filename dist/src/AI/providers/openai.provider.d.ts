import { ConfigService } from '@nestjs/config';
export declare class OpenAIProvider {
    private readonly configService;
    private readonly client;
    constructor(configService: ConfigService);
    generateStructuredQuiz(prompt: string): Promise<string>;
}
