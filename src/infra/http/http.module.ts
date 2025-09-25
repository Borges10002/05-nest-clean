import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { AuthenticateController } from './controllers/‎src/controllers/authenticate.controller';
import { CreateAccountController } from './controllers/‎src/controllers/create-account.controller';
import { CreateQuestionController } from './controllers/‎src/controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/‎src/controllers/fetch-recent-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
