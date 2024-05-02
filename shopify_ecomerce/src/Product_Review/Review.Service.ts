import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './Review.Entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private reviewRepo: Repository<ReviewEntity>,
  ) { }
  getHello(): string {
    return 'Hello Cart!';
  }
  async findById(id: number): Promise<ReviewEntity[] | null> {
    let ReviewEntity = await this.reviewRepo.find({ where: { Product_Id: id } });
    if (ReviewEntity != null) {
      return ReviewEntity;
    }
    return null;
  }

  async addReview(reviewEntity: ReviewEntity): Promise<boolean> {
    let review = await this.reviewRepo.save(reviewEntity);
    if (review != null) {
      return true;
    }
    return false;
  }
}
