import {
  Controller,
  Delete,
  Inject,
  Post,
  Param,
  Get,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import {
  CreateCommentDTO,
  DeleteCommentByIdDTO,
  GetCommentByIdDTO,
  GetCommentParamsDTO,
  UpdateCommentDTO,
  UpdateCommentParamsDTO,
} from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  @Inject() private readonly commentService: CommentService;

  @Post()
  create(@Body() body: CreateCommentDTO) {
    return this.commentService.create(body);
  }

  @Get()
  findAll(@Query() params: GetCommentParamsDTO) {
    return this.commentService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetCommentByIdDTO) {
    return this.commentService.findById(params);
  }

  @Put(':id')
  update(
    @Param() params: UpdateCommentParamsDTO,
    @Body() body: UpdateCommentDTO,
  ) {
    return this.commentService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteCommentByIdDTO) {
    return this.commentService.delete(params);
  }
}
