import {
  Controller,
  Inject,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Query,
  Put,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import {
  CreateContactDTO,
  DeleteContactByIdDTO,
  GetContactByIdDTO,
  GetContactParamsDTO,
  UpdateContactDTO,
  UpdateContactParamsDTO,
  UpdateContactStatusDTO,
} from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  @Inject() private readonly contactService: ContactService;

  @Post()
  create(@Body() body: CreateContactDTO) {
    return this.contactService.create(body);
  }

  @Get()
  findAll(@Query() params: GetContactParamsDTO) {
    return this.contactService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params: GetContactByIdDTO) {
    return this.contactService.findById(params);
  }

  @Put(':id')
  update(
    @Param() params: UpdateContactParamsDTO,
    @Body() body: UpdateContactDTO,
  ) {
    return this.contactService.update(params, body);
  }

  @Put(':contact_id')
  updateStatus(@Param() params: UpdateContactStatusDTO) {
    return this.contactService.updateStatus(params);
  }

  @Delete(':id')
  delete(@Param() params: DeleteContactByIdDTO) {
    return this.contactService.delete(params);
  }
}
