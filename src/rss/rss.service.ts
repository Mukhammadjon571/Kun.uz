import { Injectable, Inject } from '@nestjs/common';
import { RssRepo } from './repo/rss.repo';
import {
  CreateRSSDTO,
  GetRSSParamsDTO,
  GetRSSByIdDTO,
  UpdateRSSParamsDTO,
  UpdateRSSDTO,
  DeleteRSSByIdDTO,
} from './dto/rss.dto';

@Injectable()
export class RssService {
  @Inject() private readonly rssRepo: RssRepo;

  async create(body: CreateRSSDTO) {
    return await this.rssRepo.create(body);
  }

  findAll(params: GetRSSParamsDTO) {
    return this.rssRepo.findAll(params);
  }

  findOne(params: GetRSSByIdDTO) {
    return this.rssRepo.findOne(params.id);
  }

  async update(params: UpdateRSSParamsDTO, body: UpdateRSSDTO) {
    await this.checkRssExists(params.id);
    return await this.rssRepo.update(params.id, body);
  }

  async delete(params: DeleteRSSByIdDTO) {
    await this.checkRssExists(params.id);
    return await this.rssRepo.delete(params.id);
  }

  private async checkRssExists(id: string) {
    const rss = await this.rssRepo.findOne(id);
    if (!rss) {
      throw new Error('RSS not found');
    }
  }
}
