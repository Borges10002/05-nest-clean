import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@/auth/auth.module';

import { envSchema } from '@/env';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateAccountController } from './controllers/‎src/controllers/create-account.controller';
import { AuthenticateController } from './controllers/‎src/controllers/authenticate.controller';
import { CreateQuestionController } from './controllers/‎src/controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/‎src/controllers/fetch-recent-questions.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
