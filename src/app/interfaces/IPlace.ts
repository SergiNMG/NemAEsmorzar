import { IProduct } from "./IProduct";
import { IReview } from "./IReview";

export interface IPlace {
    id: number,
    name: string,
    location: string,
    description: string,
    rating: number,
    mainProduct: IProduct,
    products: IProduct[],
    reviews: IReview[]
}