import { IProduct } from "../IProduct";
import { IUser } from "../IUser";
import { IUserContract } from "../contract/IUserContracr";

export class User implements IUser {
    id: number;
    nick: string;
    password: string;
    wishList: IProduct[];

    constructor(userContract: IUserContract) {
        this.id = userContract.id;
        this.nick = userContract.nick;
        this.password = userContract.password;
        this.wishList = userContract.wishList;
    }
}