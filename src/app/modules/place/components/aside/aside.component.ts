import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() places!: Place[];
  @Output() selectPlaceEvent = new EventEmitter<Place>();

  selectPlace(place: Place) {
    this.selectPlaceEvent.emit(place);
  }
}
