import { IUser } from '../IUser';
import { IUserContract } from '../contract/IUserContract';

export class User implements IUser {
  uid?: string;
  name: string;
  password: string;

  constructor(userContract: IUserContract) {
    this.uid = userContract.uid;
    this.name = userContract.name;
    this.password = userContract.password;
  }
}
