import { IUser } from '../IUser';
import { IUserContract } from '../contract/IUserContract';

export class User implements IUser {
  uid?: string;
  email: string | null;
  displayName?: string | null;

  constructor(userContract: IUserContract) {
    this.uid = userContract.uid;
    this.email = userContract.email;
    this.displayName = userContract.displayName;
  }
}
