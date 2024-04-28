import { IPlace } from "../IPlace";
import { IProduct } from "../IProduct";
import { IReview } from "../IReview";
import { IPlaceContract } from "../contract/IPlaceContract";

export class Place implements IPlace {
    id: number;
    name: string;
    location: string;
    description: string;
    rating: number;
    mainProduct: IProduct;
    products: IProduct[];
    reviews: IReview[];

    constructor(placeContract: IPlaceContract) {
        this.id = placeContract.id;
        this.name = placeContract.name;
        this.location = placeContract.location;
        this.description = placeContract.description;
        this.rating = placeContract.rating;
        this.mainProduct = placeContract.mainProduct;
        this.products = placeContract.products;
        this.reviews = placeContract.reviews;
    }


}