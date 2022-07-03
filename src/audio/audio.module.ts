import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';

@Module({
  controllers: [AudioController]
})
export class AudioModule {}
