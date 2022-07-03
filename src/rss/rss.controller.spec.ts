import { Test, TestingModule } from '@nestjs/testing';
import { RssController } from './rss.controller';

describe('RssController', () => {
  let controller: RssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssController],
    }).compile();

    controller = module.get<RssController>(RssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
