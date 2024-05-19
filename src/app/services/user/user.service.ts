import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

interface UserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private authService: Auth) {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.onAuthStateChanged((user) => {
      this.currentUserSubject.next(user);
    });
  }

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

  logout() {
    return signOut(this.authService);
  }
}

// getCurrentUser(): Observable<User | null> {
//   return new Observable((observer) => {
//     this.authService.onAuthStateChanged((user) => {
//       observer.next(user);
//     });
//   });
// }

// getCurrentUserValue(): User | null {
//   return this.currentUserSubject.value;
// }
