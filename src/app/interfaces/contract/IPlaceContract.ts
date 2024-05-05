import { IProductContract } from './IProductContract';
import { IReviewContract } from './IReviewContract';

export interface IPlaceContract {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  products: IProductContract[];
  reviews: IReviewContract[];
}
