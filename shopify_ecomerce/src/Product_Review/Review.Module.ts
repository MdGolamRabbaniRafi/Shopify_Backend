import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './Review.Controller';
import { ReviewService } from './Review.Service';
import { ReviewEntity } from './Review.Entity';



@Module({
  imports: [
   
    TypeOrmModule.forFeature([
      ReviewEntity,
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}