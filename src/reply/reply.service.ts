import { Injectable, Inject } from '@nestjs/common';
import { ReplyRepo } from './repo/reply.repo';
import {
  CreateReplyDTO,
  GetReplyByIdDTO,
  GetReplyParamsDTO,
  UpdateReplyDTO,
  UpdateReplyParamsDTO,
  DeleteReplyByIdDTO,
} from './dto/reply.dto';

@Injectable()
export class ReplyService {
  @Inject() private readonly replyRepo: ReplyRepo;

  async create(body: CreateReplyDTO) {
    return await this.replyRepo.create(body);
  }

  findById(params: GetReplyByIdDTO) {
    return this.replyRepo.findById(params.id);
  }

  findAll(params: GetReplyParamsDTO) {
    return this.replyRepo.findAll(params);
  }

  async update(params: UpdateReplyParamsDTO, body: UpdateReplyDTO) {
    await this.checkReplyExists(params.id);
    return await this.replyRepo.update(params.id, body);
  }

  async delete(params: DeleteReplyByIdDTO) {
    await this.checkReplyExists(params.id);
    return await this.replyRepo.delete(params.id);
  }

  private async checkReplyExists(id: string) {
    const reply = await this.replyRepo.findById(id);
    if (!reply) {
      throw new Error('Reply not found');
    }
  }
}
