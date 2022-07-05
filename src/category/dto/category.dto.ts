import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsUUID,
} from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;
}

export class GetCategoryParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class GetCategoryDTO {
  @ApiProperty()
  @IsDefined()
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  offset: number;

  @ApiProperty()
  @IsDefined()
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  limit: number;
}

export class UpdateCategoryParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateCategoryDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;
}

export class DeleteCategoryParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
