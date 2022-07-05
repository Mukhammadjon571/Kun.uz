import { Module } from '@nestjs/common';
import { UsersRepo } from './repo/users.repo';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepo],
})
export class UsersModule {}
