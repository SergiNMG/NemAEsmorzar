import { IWishProduct } from '../IWishProduct';
import { IWishProductContract } from '../contract/IWishProductContract';

export class WishProduct implements IWishProduct {
  productId: string;
  wishListId: string;

  constructor(wishProductContract: IWishProductContract) {
    this.productId = wishProductContract.productId;
    this.wishListId = wishProductContract.wishListId;
  }
}
