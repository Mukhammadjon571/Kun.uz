import { Inject, Injectable } from '@nestjs/common';
import {
  CreateCategoryDTO,
  UpdateCategoryParamsDTO,
  UpdateCategoryDTO,
  DeleteCategoryParamsDTO,
  GetCategoryParamsDTO,
  GetCategoryDTO,
} from './dto/category.dto';
import { CategoryRepo } from './repo/category.repo';

@Injectable()
export class CategoryService {
  @Inject() private readonly categoryRepo: CategoryRepo;

  async create(body: CreateCategoryDTO) {
    return await this.categoryRepo.create(body);
  }

  async findAll(params: GetCategoryDTO) {
    return await this.categoryRepo.findAll(params);
  }

  async findOne(params: GetCategoryParamsDTO) {
    return await this.categoryRepo.findOne(params.id);
  }

  async update(params: UpdateCategoryParamsDTO, body: UpdateCategoryDTO) {
    await this.checkCategoryExists(params.id);
    return await this.categoryRepo.update(params.id, body);
  }

  async delete(params: DeleteCategoryParamsDTO) {
    await this.checkCategoryExists(params.id);
    return await this.categoryRepo.delete(params.id);
  }

  private async checkCategoryExists(id: string) {
    const category = await this.categoryRepo.findOne(id);
    if (!category) {
      throw new Error('Category not found');
    }
  }
}
