import { Inject, Injectable } from '@nestjs/common';
import {
  CreateContactDTO,
  UpdateContactDTO,
  UpdateContactParamsDTO,
  GetContactByIdDTO,
  GetContactParamsDTO,
  DeleteContactByIdDTO,
  UpdateContactStatusDTO,
} from './dto/contact.dto';
import { ContactRepo } from './repo/contact.repo';

@Injectable()
export class ContactService {
  @Inject() private readonly contactRepo: ContactRepo;

  async create(body: CreateContactDTO) {
    return await this.contactRepo.create(body);
  }

  findById(params: GetContactByIdDTO) {
    return this.contactRepo.findById(params.id);
  }

  findAll(params: GetContactParamsDTO) {
    return this.contactRepo.findAll(params);
  }

  async update(params: UpdateContactParamsDTO, body: UpdateContactDTO) {
    await this.checkContactExists(params.id);
    return await this.contactRepo.update(params.id, body);
  }

  async updateStatus(params: UpdateContactStatusDTO){
    await this.checkContactExists(params.contact_id);
    return await this.contactRepo.updateStatus(params);
  }

  async delete(params: DeleteContactByIdDTO) {
    await this.checkContactExists(params.id);
    return await this.contactRepo.delete(params.id);
  }

  private async checkContactExists(id: string) {
    const contact = await this.contactRepo.findById(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
  }

}
