import { IReview } from '../IReview';
import { IReviewContract } from '../contract/IReviewContract';

export class Review implements IReview {
  id?: string;
  name: string;
  date: string | Date;
  rating: number;
  description: string;
  placeId: string;

  constructor(reviewContract: IReviewContract) {
    this.id = reviewContract.id;
    this.name = reviewContract.name;
    this.date = reviewContract.date;
    this.rating = reviewContract.rating;
    this.description = reviewContract.description;
    this.placeId = reviewContract.placeId;
  }
}
