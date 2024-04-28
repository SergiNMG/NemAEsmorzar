import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaceModule { }
