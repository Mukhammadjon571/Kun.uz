import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsString,
} from 'class-validator';

export class CreateTeamDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  image: string;
}

export class GetTeamByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class GetTeamParamsDTO {
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

export class UpdateTeamParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateTeamDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  image: string;
}

export class DeleteTeamByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
