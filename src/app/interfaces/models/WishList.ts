import { IWishList } from '../IWishList';
import { IWishListContract } from '../contract/IWishListContract';
import { Product } from './Product';

export class WishList implements IWishList {
  id?: string;
  userId: string;
  productsIdList: string[] = [];

  constructor(wishListContract: IWishListContract) {
    this.id = wishListContract.id;
    this.userId = wishListContract.userId;
    this.productsIdList = wishListContract.productsIdList;
  }
}
