import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {cors: true});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 4007);
}
bootstrap();
 