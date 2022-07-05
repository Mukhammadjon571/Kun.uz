import {
  Controller,
  Post,
  Inject,
  Body,
  Get,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { RssService } from './rss.service';
import {
  CreateRSSDTO,
  GetRSSParamsDTO,
  GetRSSByIdDTO,
  UpdateRSSParamsDTO,
  UpdateRSSDTO,
  DeleteRSSByIdDTO,
} from './dto/rss.dto';

@Controller('rss')
export class RssController {
  @Inject() private readonly rssService: RssService;

  @Post()
  create(@Body() body: CreateRSSDTO) {
    return this.rssService.create(body);
  }

  @Get()
  findAll(@Query() params: GetRSSParamsDTO) {
    return this.rssService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetRSSByIdDTO) {
    return this.rssService.findOne(params);
  }

  @Put(':id')
  update(@Param() params: UpdateRSSParamsDTO, @Body() body: UpdateRSSDTO) {
    return this.rssService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteRSSByIdDTO) {
    return this.rssService.delete(params);
  }
}
