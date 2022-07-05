import { Inject, Injectable } from '@nestjs/common';
import {
  CreateTeamDTO,
  UpdateTeamParamsDTO,
  UpdateTeamDTO,
  DeleteTeamByIdDTO,
  GetTeamParamsDTO,
  GetTeamByIdDTO,
} from './dto/team.dto';
import { TeamRepo } from './repo/team.repo';

@Injectable()
export class TeamService {
  @Inject() private readonly teamRepo: TeamRepo;

  async create(body: CreateTeamDTO) {
    return await this.teamRepo.create(body);
  }

  findAll(params: GetTeamParamsDTO) {
    return this.teamRepo.findAll(params);
  }

  findOne(params: GetTeamByIdDTO) {
    return this.teamRepo.findOne(params.id);
  }

  async update(params: UpdateTeamParamsDTO, body: UpdateTeamDTO) {
    await this.checkTeamExists(params.id);
    return await this.teamRepo.update(params.id, body);
  }

  async delete(params: DeleteTeamByIdDTO) {
    await this.checkTeamExists(params.id);
    return await this.teamRepo.delete(params.id);
  }

  private async checkTeamExists(id: string) {
    const team = await this.teamRepo.findOne(id);
    if (!team) {
      throw new Error('Team not found');
    }
  }
}
