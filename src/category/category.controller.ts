import { Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
  UpdateCategoryParamsDTO,
  GetCategoryDTO,
  GetCategoryParamsDTO,
  DeleteCategoryParamsDTO,
} from './dto/category.dto';

@Controller('category')
export class CategoryController {
  @Inject() private readonly categoryService: CategoryService;

  @Post()
  async create(body: CreateCategoryDTO) {
    return await this.categoryService.create(body);
  }

  @Get()
  async findAll(params: GetCategoryDTO) {
    return await this.categoryService.findAll(params);
  }

  @Get('/:id')
  async findOne(params: GetCategoryParamsDTO) {
    return await this.categoryService.findOne(params);
  }

  @Put('/:id')
  async update(params: UpdateCategoryParamsDTO, body: UpdateCategoryDTO) {
    return await this.categoryService.update(params, body);
  }

  @Delete()
  async delete(params: DeleteCategoryParamsDTO) {
    return await this.categoryService.delete(params);
  }
}
