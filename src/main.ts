import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { TestService } from './test/test.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(Logger));
  app.flushLogs();

  const testService = app.get(TestService);

  await app.listen(3000);
}
bootstrap();
