import { IPlace } from '../IPlace';
import { IProduct } from '../IProduct';
import { IReview } from '../IReview';
import { IPlaceContract } from '../contract/IPlaceContract';
import { Product } from './Product';
import { Review } from './Review';

export class Place implements IPlace {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  products: Product[];
  reviews: Review[];

  constructor(placeContract: IPlaceContract) {
    this.id = placeContract.id;
    this.name = placeContract.name;
    this.location = placeContract.location;
    this.description = placeContract.description;
    this.rating = placeContract.rating;
    this.products = placeContract.products;
    this.reviews = placeContract.reviews;
  }
}
