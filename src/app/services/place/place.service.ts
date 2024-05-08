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

  private placePath: string = 'places';
  private placeCollection: AngularFirestoreCollection<Place>;

  constructor(private nemAEsmorzarDB: AngularFirestore) {
    this.placeCollection = this.nemAEsmorzarDB.collection(this.placePath);
    this.getPlaces();
  }

  getPlaces() {
    this.placeCollection
      .snapshotChanges()
      .pipe(
        map((places) => {
          return places.map((place) => {
            const docId = place.payload.doc.id;
            const data = place.payload.doc.data() as Place;
            return { id: docId, ...data };
          });
        })
      )
      .subscribe((places) => {
        this._placesList = places;
        this.updatePlaceSubject();
      });
  }

  private updatePlaceSubject() {
    this.placeSubject.next(this._placesList);
  }
}
