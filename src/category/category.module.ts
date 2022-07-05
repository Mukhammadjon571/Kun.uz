import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepo } from './repo/category.repo';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepo],
})
export class CategoryModule {}
