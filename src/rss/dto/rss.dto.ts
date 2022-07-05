import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateRSSDTO {
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class GetRSSParamsDTO {
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

export class GetRSSByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateRSSParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateRSSDTO {
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class DeleteRSSByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
