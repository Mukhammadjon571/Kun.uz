import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import {
  CreateReplyDTO,
  DeleteReplyByIdDTO,
  GetReplyByIdDTO,
  GetReplyParamsDTO,
  UpdateReplyDTO,
  UpdateReplyParamsDTO,
} from './dto/reply.dto';
import { Inject } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
  @Inject() private readonly replyService: ReplyService;

  @Post()
  create(@Body() body: CreateReplyDTO) {
    return this.replyService.create(body);
  }

  @Get()
  findAll(@Query() params: GetReplyParamsDTO) {
    return this.replyService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetReplyByIdDTO) {
    return this.replyService.findById(params);
  }

  @Put(':id')
  update(@Param() params: UpdateReplyParamsDTO, @Body() body: UpdateReplyDTO) {
    return this.replyService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteReplyByIdDTO) {
    return this.replyService.delete(params);
  }
}
