import { IProduct } from './IProduct';

export interface IWishList {
  id?: string;
  userId: string;
  productList: IProduct[];
}
