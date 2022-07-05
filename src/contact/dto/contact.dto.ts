import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsObject,
  IsNotEmpty,
  IsEmail,
  IsString,
  IsPhoneNumber,
  IsOptional,
  IsUUID,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { ContactStatusEnum } from '../enum/contact.enum';

export class CreateContactDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsDefined()
  @IsPhoneNumber('UZ')
  @IsOptional()
  phone_number: string;
}

export class UpdateContactDTO {
  @ApiProperty()
  @IsDefined()
  @IsObject()
  @IsNotEmpty()
  name: Record<string, string>;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsDefined()
  @IsPhoneNumber('UZ')
  @IsOptional()
  phone_number: string;
}

export class UpdateContactParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class UpdateContactStatusDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  contact_id: string;

  @ApiProperty()
  @IsDefined()
  @IsEnum(Object.values(ContactStatusEnum))
  @IsNotEmpty()
  status: string;
}

export class GetContactByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}

export class GetContactParamsDTO {
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

export class DeleteContactByIdDTO {
  @ApiProperty()
  @IsDefined()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
