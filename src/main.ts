import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    /*
    whitelist: retira das requisições com body os campos
    que não são esperados para as entidades do sistema
    */
    whitelist: true,

    /*
    forbidNonWhitelisted: dispara erro nas requisições com body
    que tiverem campos não esperados para as entidades do sistema
    */
    forbidNonWhitelisted: true,

    /*
    transform: tenta converter os tipos dos dados automaticamente,
    mas interfere na performance do sistema
    */
    transform: false
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
