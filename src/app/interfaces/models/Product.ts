import { IProduct } from '../IProduct';
import { IProductContract } from '../contract/IProductContract';

export class Product implements IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  placeId: string;

  constructor(productContract: IProductContract) {
    this.id = productContract.id;
    this.name = productContract.name;
    this.description = productContract.description;
    this.price = productContract.price;
    this.rating = productContract.rating;
    this.placeId = productContract.placeId;
  }
}
