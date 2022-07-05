import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactRepo } from './repo/contact.repo';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepo],
})
export class ContactModule {}
