import { Component, Input } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
})
export class PlaceInfoComponent {
  @Input() place!: Place;
}
