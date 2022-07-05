import { Module } from '@nestjs/common';
import { TeamRepo } from './repo/team.repo';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService, TeamRepo]
})
export class TeamModule {}
