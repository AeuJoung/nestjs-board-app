import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
/*부트스트랩(bootstrap)은 컴퓨터 공학에서 시스템이나 애플리케이션을 초기화하고 
실행하기 위해 필요한 기본적인 단계를 의미해. NestJS에서 부트스트랩 과정은 
애플리케이션을 시작하고, 필요한 모듈 및 의존성을 초기화하는 단계를 포함해.*/
