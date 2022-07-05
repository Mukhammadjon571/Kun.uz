import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateReplyDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  comment_id: string;

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

export class GetReplyParamsDTO {
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

export class GetReplyByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateReplyParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateReplyDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  comment_id: string;

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

export class DeleteReplyByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
