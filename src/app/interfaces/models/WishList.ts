import { IWishList } from '../IWishList';
import { IWishListContract } from '../contract/IWishListContract';

export class WishList implements IWishList {
  id: string;

  constructor(wishListContract: IWishListContract) {
    this.id = wishListContract.id;
  }
}
