import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsUUID,
} from 'class-validator';

export class NewsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  category_id: string;

  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  tag_id: string;

  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  description: Object;

  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  images: Object;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  views: number;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  telegram: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  facebook: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  instagram: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  twitter: string;

  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  subcategory_id: string;
}
