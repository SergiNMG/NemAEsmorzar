import { IUser } from '../IUser';
import { IUserContract } from '../contract/IUserContract';

export class User implements IUser {
  uid?: string;
  email: string;
  password: string;

  constructor(userContract: IUserContract) {
    this.uid = userContract.uid;
    this.email = userContract.email;
    this.password = userContract.password;
  }
}
