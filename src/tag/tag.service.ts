import { Inject, Injectable } from '@nestjs/common';
import { TagRepo } from './repo/tag.repo';
import {
  CreateTagDTO,
  UpdateTagDTO,
  UpdateTagParamsDTO,
  DeleteTagByIdDTO,
  GetTagByIdDTO,
  GetTagParamsDTO,
} from './dto/tag.dto';

@Injectable()
export class TagService {
  @Inject() private readonly tagRepo: TagRepo;

  async create(body: CreateTagDTO) {
    return await this.tagRepo.create(body);
  }

  findAll(params: GetTagParamsDTO) {
    return this.tagRepo.findAll(params);
  }

  findOne(params: GetTagByIdDTO) {
    return this.tagRepo.findOne(params.id);
  }

  async update(params: UpdateTagParamsDTO, body: UpdateTagDTO) {
    await this.checkTagExists(params.id);
    return await this.tagRepo.update(params.id, body);
  }

  async delete(params: DeleteTagByIdDTO) {
    await this.checkTagExists(params.id);
    return await this.tagRepo.delete(params.id);
  }

  private async checkTagExists(id: string) {
    const tag = await this.tagRepo.findOne(id);
    if (!tag) {
      throw new Error('Tag not found');
    }
  }
}
