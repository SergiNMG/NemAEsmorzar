import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Place } from 'src/app/interfaces/models/Place';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private _placesList: Place[] = [];
  placeSelected: Place = {} as Place;

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

  getProductsFromAPlaceList(idPlace: string) {
    this.places$.pipe(
      map((placeList) => {
        placeList.filter((place) => place.id === idPlace);
      })
    );
  }

  addPlace(placeData: any) {
    return this.nemAEsmorzarDB.collection('places').add(placeData);
  }

  deletePlace(placeId: string) {
    return this.nemAEsmorzarDB.collection('places').doc(placeId).delete();
  }

  private updatePlaceSubject() {
    this.placeSubject.next(this._placesList);
  }

  // getPlaceById(id: string): Observable<Place | void> {
  //   return this.places$.pipe(
  //     map((placeList) => {
  //       placeList.find((place) => {
  //         place.id === id;
  //       });
  //     })
  //   );
  // }
}
