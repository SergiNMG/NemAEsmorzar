import { IWishList } from '../IWishList';
import { IWishListContract } from '../contract/IWishListContract';
import { Product } from './Product';

export class WishList implements IWishList {
  id?: string;
  userId: string;
  productList: Product[];

  constructor(wishListContract: IWishListContract) {
    this.id = wishListContract.id;
    this.userId = wishListContract.userId;
    this.productList = wishListContract.productList;
  }
}
