import { IProductContract } from './IProductContract';

export interface IWishListContract {
  id?: string;
  userId: string;
  productList: IProductContract[];
}
