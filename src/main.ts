import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Kun.uz API')
    .setDescription('Kun.uz API description')
    .setVersion('1.0')
    .addTag('Kun.uz')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-swagger', app, document);

  const { port } = config.server;
  await app.listen(port, () => {
    console.log(`Server is running with port ${port}`);
  });
}
bootstrap();
