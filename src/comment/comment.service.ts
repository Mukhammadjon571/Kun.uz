import { Inject, Injectable } from '@nestjs/common';
import {
  CreateCommentDTO,
  DeleteCommentByIdDTO,
  GetCommentByIdDTO,
  GetCommentParamsDTO,
  UpdateCommentDTO,
  UpdateCommentParamsDTO,
} from './dto/comment.dto';
import { CommentRepo } from './repo/comment.repo';

@Injectable()
export class CommentService {
  @Inject() private readonly commentRepo: CommentRepo;

  async create(body: CreateCommentDTO) {
    return await this.commentRepo.create(body);
  }

  findById(params: GetCommentByIdDTO) {
    return this.commentRepo.findById(params.id);
  }

  findAll(params: GetCommentParamsDTO) {
    return this.commentRepo.findAll(params);
  }

  async update(params: UpdateCommentParamsDTO, body: UpdateCommentDTO) {
    await this.checkCommentExists(params.id);
    return await this.commentRepo.update(params.id, body);
  }

  async delete(params: DeleteCommentByIdDTO) {
    await this.checkCommentExists(params.id);
    return await this.commentRepo.delete(params.id);
  }

  private async checkCommentExists(id: string) {
    const comment = await this.commentRepo.findById(id);
    if (!comment) {
      throw new Error('Comment not found');
    }
  }
}
