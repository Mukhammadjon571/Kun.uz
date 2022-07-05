import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsUUID,
} from 'class-validator';

export class CreateTagDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;
}

export class GetTagByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class GetTagParamsDTO {
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

export class UpdateTagParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateTagDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;
}

export class DeleteTagParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
