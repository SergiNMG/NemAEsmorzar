import { IProduct } from "./IProduct";
import { IReview } from "./IReview";

export interface IPlace {
    id: string,
    name: string,
    location: string,
    description: string,
    rating: number
}