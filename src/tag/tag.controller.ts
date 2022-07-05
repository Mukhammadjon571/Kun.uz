import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TagService } from './tag.service';
import {
  CreateTagDTO,
  GetTagParamsDTO,
  GetTagByIdDTO,
  UpdateTagParamsDTO,
  UpdateTagDTO,
  DeleteTagByIdDTO,
} from './dto/tag.dto';

@Controller('tag')
export class TagController {
  @Inject() private readonly tagService: TagService;

  @Post()
  create(@Body() body: CreateTagDTO) {
    return this.tagService.create(body);
  }

  @Get()
  findAll(@Query() params: GetTagParamsDTO) {
    return this.tagService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetTagByIdDTO) {
    return this.tagService.findOne(params);
  }

  @Put(':id')
  update(@Param() params: UpdateTagParamsDTO, @Body() body: UpdateTagDTO) {
    return this.tagService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteTagByIdDTO) {
    return this.tagService.delete(params);
  }
}
