import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { GetRatingDTO, RatingDTO, UpdateRatingDTO } from './dto/rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  @Inject() private readonly ratingService: RatingService;

  @Post('create-rating')
  create(@Body() body: RatingDTO) {
    return this.ratingService.create(body);
  }
  @Get()
  get(@Query() body: GetRatingDTO) {
    return this.ratingService.get(body);
  }

  @Get(':rating-id')
  getById(@Param() ratingId: string) {
    return this.ratingService.getById(ratingId);
  }

  @Put('update-rating/:rating_id')
  update(@Param() params: UpdateRatingDTO, @Body() body: RatingDTO) {
    return this.ratingService.update(params, body);
  }
}
