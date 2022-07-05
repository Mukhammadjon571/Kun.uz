import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
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
  async create(@Body() body: CreateCategoryDTO) {
    return await this.categoryService.create(body);
  }

  @Get()
  async findAll(@Query() params: GetCategoryDTO) {
    return await this.categoryService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param() params: GetCategoryParamsDTO) {
    return await this.categoryService.findOne(params);
  }

  @Put(':id')
  async update(@Param() params: UpdateCategoryParamsDTO, @Body() body: UpdateCategoryDTO) {
    return await this.categoryService.update(params, body);
  }

  @Delete(':id')
  async delete(@Param() params: DeleteCategoryParamsDTO) {
    return await this.categoryService.delete(params);
  }
}
