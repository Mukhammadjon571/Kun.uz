import {
  Controller,
  Inject,
  Post,
  Put,
  Get,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import {
  CreateTeamDTO,
  UpdateTeamParamsDTO,
  UpdateTeamDTO,
  DeleteTeamByIdDTO,
  GetTeamParamsDTO,
  GetTeamByIdDTO,
} from './dto/team.dto';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  @Inject() private readonly teamService: TeamService;

  @Post()
  create(@Body() body: CreateTeamDTO) {
    return this.teamService.create(body);
  }

  @Put(':id')
  update(@Param() params: UpdateTeamParamsDTO, @Body() body: UpdateTeamDTO) {
    return this.teamService.update(params, body);
  }

  @Get()
  findAll(@Query() params: GetTeamParamsDTO) {
    return this.teamService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetTeamByIdDTO) {
    return this.teamService.findOne(params);
  }

  @Delete(':id')
  delete(@Param() params: DeleteTeamByIdDTO) {
    return this.teamService.delete(params);
  }
}
