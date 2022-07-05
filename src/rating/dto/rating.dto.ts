import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class RatingDTO {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  news_id: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  rating: string;
}

export class GetRatingDTO {
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

export class UpdateRatingDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  id: string;
}
