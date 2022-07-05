import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserDTO,
  GetUserParamsDTO,
  GetUserByIdDTO,
  UpdateUserDTO,
  UpdateUserParamsDTO,
  DeleteUserByIdDTO,
} from './dto/users.dto';
import { UsersRepo } from './repo/users.repo';

@Injectable()
export class UsersService {
  @Inject() private readonly usersRepo: UsersRepo;

  async create(body: CreateUserDTO) {
    return await this.usersRepo.create(body);
  }

  findAll(params: GetUserParamsDTO) {
    return this.usersRepo.findAll(params);
  }

  findOne(params: GetUserByIdDTO) {
    return this.usersRepo.findOne(params.id);
  }

  async update(params: UpdateUserParamsDTO, body: UpdateUserDTO) {
    await this.checkUserExists(params.id);
    return await this.usersRepo.update(params.id, body);
  }

  async delete(params: DeleteUserByIdDTO) {
    await this.checkUserExists(params.id);
    return await this.usersRepo.delete(params.id);
  }

  private async checkUserExists(id: string) {
    const user = await this.usersRepo.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
  }
}
