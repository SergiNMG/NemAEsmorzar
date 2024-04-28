import { IProduct } from "./IProduct";

export interface IUser {
    id: number,
    nick: string,
    password: string,
    wishList: IProduct[]
}