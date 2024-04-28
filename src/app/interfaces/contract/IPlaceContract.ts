import { IProductContract } from "./IProductContract";
import { IReviewContract } from "./IReviewContract";

export interface IPlaceContract {
    id: number,
    name: string,
    location: string,
    description: string,
    rating: number,
    mainProduct: IProductContract,
    products: IProductContract[],
    reviews: IReviewContract[]
}