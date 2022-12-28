import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setGlobalPrefix() sirve para fijar un prefijo en la url del endpoint
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
}
bootstrap();
