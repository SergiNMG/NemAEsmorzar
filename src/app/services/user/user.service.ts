import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private authService: Auth) {}

  register(credentials: UserCredentials) {
    return createUserWithEmailAndPassword(
      this.authService,
      credentials.email,
      credentials.password
    );
  }

  login(credentials: UserCredentials) {
    return signInWithEmailAndPassword(
      this.authService,
      credentials.email,
      credentials.password
    );
  }
}
