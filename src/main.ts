import { NestFactory, } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.enableCors({
    origin: ['http://192.9.200.62:3000', 'http://localhost:3000'],
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // allowedHeaders: 'Content-Type, Accept, Authorization,cookies',
    credentials: true,
  });

  await app.listen(3005);
}
bootstrap();
