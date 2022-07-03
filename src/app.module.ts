import { Module } from '@nestjs/common';
import knexConfig from 'knexfile';
import { KnexModule } from 'nest-knexjs';
import config from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { RatingModule } from './rating/rating.module';
import { TagModule } from './tag/tag.module';
import { AudioService } from './audio/audio.service';
import { AudioModule } from './audio/audio.module';
import { CommentModule } from './comment/comment.module';
import { CommmentController } from './commment/commment.controller';
import { CommmentService } from './commment/commment.service';
import { ReplyModule } from './reply/reply.module';
import { TeamModule } from './team/team.module';
import { UsersModule } from './users/users.module';
import { RssModule } from './rss/rss.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [KnexModule.forRoot({ config: knexConfig[config.server.nodeEnv] }), NewsModule, CategoryModule, RatingModule, TagModule, AudioModule, CommentModule, ReplyModule, TeamModule, UsersModule, RssModule, ContactModule],
  controllers: [AppController, CommmentController],
  providers: [AppService, CategoryService, AudioService, CommmentService],
})
export class AppModule {}
