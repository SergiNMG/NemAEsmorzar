import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Place } from 'src/app/interfaces/models/Place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private URL = 'assets/data/places.json';
  private _placesList: Place[] = [];

  private readonly placeSubject: BehaviorSubject<Place[]> = new BehaviorSubject<Place[]>([]);
  places$: Observable<Place[]> = this.placeSubject.asObservable();

  constructor(private httpPlaces: HttpClient) { }

  getPlaces() {
    this.httpPlaces.get<Place[]>(this.URL)
      .subscribe({
        next: place => {
          this._placesList = place;
          this.updatePlaceSubject();
        },
        error: error => {
          console.error('Error while getting places', error);
        }
      })
  }

  deletePlace(place: Place) {
    this._placesList = this._placesList.filter(placeContract => place.id !== placeContract.id);
  }

  addPlace(newPlace: Place) {
    this._placesList.push(newPlace);
    this.updatePlaceSubject();
  }

  private updatePlaceSubject() {
    this.placeSubject.next(this._placesList);
  }
}
