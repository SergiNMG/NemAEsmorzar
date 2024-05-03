import { IWishList } from '../IWishList';
import { IWishListContract } from '../contract/IWishListContract';

export class WishList implements IWishList {
  id: string;
  userId: string;

  constructor(wishListContract: IWishListContract) {
    this.id = wishListContract.id;
    this.userId = wishListContract.userId;
  }
}
