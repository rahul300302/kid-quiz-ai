import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIProvider {
  private readonly client: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.getOrThrow<string>('OPENAI_API_KEY'),
    });
  }

  async generateStructuredQuiz(prompt: string): Promise<string> {
    try {
      const response = await this.client.responses.create({
        model: 'gpt-4o',
        input: [
          {
            role: 'system',
            content:
              'You are a highly skilled educational content analyzer and structured quiz generator. Always return valid JSON.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_output_tokens: 1500,
      });

      return response.output_text;
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new InternalServerErrorException('AI generation failed');
    }
  }
}
