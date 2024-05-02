import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ReviewEntity } from './Review.Entity';
import { ReviewService } from './Review.Service';



@Controller('Review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  getHello(): string {
    return this.reviewService.getHello();
  }
  @Post('/addReview')
  async addReview(@Body() ReviewData:ReviewEntity):Promise<boolean>
  {
    return await this.reviewService.addReview(ReviewData);
  }
  @Get('/getReview/:id')
  async getReview(@Param('id', ParseIntPipe) Id: number):Promise<ReviewEntity[] | null>
  {
    return await this.reviewService.findById(Id);
  }
}
