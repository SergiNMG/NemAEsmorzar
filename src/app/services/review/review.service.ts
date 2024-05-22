import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Review } from 'src/app/interfaces/models/Review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private _reviewList: Review[] = [];

  private readonly reviewSubject: BehaviorSubject<Review[]> =
    new BehaviorSubject<Review[]>([]);
  reviews$: Observable<Review[]> = this.reviewSubject.asObservable();

  private reviewPath: string = 'reviews';
  private reviewCollection: AngularFirestoreCollection<Review>;

  constructor(private nemAEsmorzarDB: AngularFirestore) {
    this.reviewCollection = this.nemAEsmorzarDB.collection(this.reviewPath);
    this.getReviews();
  }

  getReviews() {
    this.reviewCollection
      .snapshotChanges()
      .pipe(
        map((reviews) => {
          return reviews.map((review) => {
            const docId = review.payload.doc.id;
            const data = review.payload.doc.data() as Review;
            return { id: docId, ...data };
          });
        })
      )
      .subscribe({
        next: (reviews) => {
          this._reviewList = reviews;
          this.reviewSubject.next(this._reviewList);
        },
        error: (error) => {
          console.error('Error while getting reviews', error);
        },
      });
  }

  addReview(placeData: any) {
    return this.nemAEsmorzarDB.collection('reviews').add(placeData);
  }

  deleteReview(reviewId: string) {
    return this.nemAEsmorzarDB.collection('reviews').doc(reviewId).delete();
  }
}
