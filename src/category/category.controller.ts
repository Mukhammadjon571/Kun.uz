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
  create(@Body() body: CreateCategoryDTO) {
    return this.categoryService.create(body);
  }

  @Get()
  findAll(@Query() params: GetCategoryDTO) {
    return this.categoryService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetCategoryParamsDTO) {
    return this.categoryService.findOne(params);
  }

  @Put(':id')
  update(
    @Param() params: UpdateCategoryParamsDTO,
    @Body() body: UpdateCategoryDTO,
  ) {
    return this.categoryService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteCategoryParamsDTO) {
    return this.categoryService.delete(params);
  }
}
