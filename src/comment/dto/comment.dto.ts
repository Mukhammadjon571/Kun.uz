import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  likes: number;
}

export class UpdateCommentDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  likes: number;
}

export class UpdateCommentParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class GetCommentByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class GetCommentParamsDTO {
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

export class DeleteCommentByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  id: string;
}
