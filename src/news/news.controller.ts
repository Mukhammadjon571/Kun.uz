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
import {
  CreateNewsDTO,
  DeleteNewsDTO,
  GetNewsByIdDTO,
  GetNewsDTO,
  UpdateNewsDTO,
} from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  @Inject() private readonly newsService: NewsService;

  @Post()
  createNews(@Body() body: CreateNewsDTO) {
    return this.newsService.createNews(body);
  }

  @Get()
  get(@Query() params: GetNewsDTO) {
    return this.newsService.getNews(params);
  }

  @Get(':news_id')
  getById(@Param() params: GetNewsByIdDTO) {
    return this.newsService.getById(params);
  }

  @Put('update-news/:news_id')
  updateNews(@Param() params: UpdateNewsDTO) {
    return this.newsService.updateNews(params);
  }

  @Delete('delete-news/:news_id')
  deleteNews(@Param() params: DeleteNewsDTO) {
    return this.newsService.deleteNews(params);
  }
}
