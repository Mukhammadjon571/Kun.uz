import { Inject, Injectable } from '@nestjs/common';
import {
  CreateNewsDTO,
  DeleteNewsDTO,
  GetNewsByIdDTO,
  GetNewsDTO,
  UpdateNewsDTO,
} from './dto/news.dto';
import { NewsRepo } from './repo/news.repo';

@Injectable()
export class NewsService {
  @Inject() private readonly newsRepo: NewsRepo;

  createNews(body: CreateNewsDTO) {
    return this.newsRepo.createNews(body);
  }

  getNews(params: GetNewsDTO) {
    return this.newsRepo.getNews(params);
  }

  getById(id: GetNewsByIdDTO) {
    return this.newsRepo.getById(id);
  }

  updateNews(params: UpdateNewsDTO) {
    return this.newsRepo.updateNews(params);
  }

  deleteNews(params: DeleteNewsDTO) {
    return this.newsRepo.deleteNews(params);
  }
}
