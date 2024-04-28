import { IProductContract } from "./IProductContract";

export interface IUserContract {
    id: number,
    nick: string,
    password: string,
    wishList: IProductContract[]
}