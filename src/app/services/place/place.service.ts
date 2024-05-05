import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, switchMap } from 'rxjs';
import { Place } from 'src/app/interfaces/models/Place';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private _placesList: Place[] = [];

  private readonly placeSubject: BehaviorSubject<Place[]> = new BehaviorSubject<
    Place[]
  >([]);
  places$: Observable<Place[]> = this.placeSubject.asObservable();

  private placePath = 'place';
  private placeCollection: AngularFirestoreCollection<Place>;

  constructor(private nemAEsmorzarDB: AngularFirestore) {
    this.placeCollection = this.nemAEsmorzarDB.collection(this.placePath);
    this.getPlaces();
  }

  private getPlaces() {
    this.placeCollection.snapshotChanges().pipe(
      switchMap((places) => {
        const placeWithSubCollections = places.map((place) => {
          const id = place.payload.doc.id;
          const productsCollection = this.nemAEsmorzarDB.collection(
            `place/${id}/products`
          );
          const reviewCollection = this.nemAEsmorzarDB.collection(
            `place/${id}/reviews`
          );
          return forkJoin({
            id: id,
            products: productsCollection.get(),
            reviews: reviewCollection.get(),
          });
        });
        return forkJoin(placeWithSubCollections);
      }),
      map((placesWithSubCollections) => {
        return placesWithSubCollections.map((placeWithSubCollections) => {
          const place = placeWithSubCollections;
          const products = placeWithSubCollections.products.docs.map((doc) =>
            doc.data()
          );
          const reviews = placeWithSubCollections.reviews.docs.map((doc) =>
            doc.data()
          );
          return { place, products, reviews };
        });
      })
    );
  }

  // private getPlaces() {
  //   this.placeCollection
  //     .snapshotChanges()
  //     .pipe(
  //       map((places) => {
  //         return places.map((place) => {
  //           const data = place.payload.doc.data() as Place;
  //           return { ...data };
  //         });
  //       })
  //     )
  //     .subscribe((places) => {
  //       this._placesList = places;
  //       this.updatePlaceSubject();
  //     });
  // }

  getPlacesCollection(): AngularFirestoreCollection<Place> {
    return this.placeCollection;
  }

  private updatePlaceSubject() {
    this.placeSubject.next(this._placesList);
  }

  // getPlacesFirebase() {
  //   const placesObservable = fromCollectionRef(this.placeRef, { idField: 'id' });

  //   placesObservable
  //     .pipe(
  //       map((places) =>
  //         places.map((place) => ({ id: place.id, ...place['data']() }))
  //       )
  //     )
  //     .subscribe({
  //       next: (places) => {
  //         this._placesList = places;
  //         this.updatePlaceSubject();
  //       },
  //       error: (error) => {
  //         console.error('Error while getting places', error);
  //       },
  //     });
  // }

  // deletePlace(place: Place) {
  //   this._placesList = this._placesList.filter(placeContract => place.id !== placeContract.id);
  // }

  // addPlace(newPlace: Place) {
  //   this._placesList.push(newPlace);
  //   this.updatePlaceSubject();
  // }
}
