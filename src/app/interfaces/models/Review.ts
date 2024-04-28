import { IReview } from "../IReview";
import { IReviewContract } from "../contract/IReviewContract";

export class Review implements IReview {
    name: string;
    date: string | Date;
    rating: number;
    description: string;

    constructor(reviewContract: IReviewContract) {
        this.name = reviewContract.name;
        this.date = reviewContract.date;
        this.rating = reviewContract.rating;
        this.description = reviewContract.description;
    }
}