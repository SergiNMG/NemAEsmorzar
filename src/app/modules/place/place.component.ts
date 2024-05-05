import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Place } from 'src/app/interfaces/models/Place';
import { PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  places: Place[] = {} as Place[];

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.places$.subscribe({
      next: (places) => {
        this.places = places;
        console.log(places);
      },
      error: (error) => {
        console.error('Error while getting places', error);
      },
    });
  }
}
