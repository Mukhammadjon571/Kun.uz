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
  CreateUserDTO,
  GetUserParamsDTO,
  GetUserByIdDTO,
  UpdateUserDTO,
  UpdateUserParamsDTO,
  DeleteUserByIdDTO,
} from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Inject() private readonly usersService: UsersService;

  @Post()
  create(@Body() body: CreateUserDTO) {
    return this.usersService.create(body);
  }

  @Get()
  findAll(@Query() params: GetUserParamsDTO) {
    return this.usersService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetUserByIdDTO) {
    return this.usersService.findOne(params);
  }

  @Put(':id')
  update(@Param() params: UpdateUserParamsDTO, @Body() body: UpdateUserDTO) {
    return this.usersService.update(params, body);
  }

  @Delete(':id')
  delete(@Param() params: DeleteUserByIdDTO) {
    return this.usersService.delete(params);
  }
}
