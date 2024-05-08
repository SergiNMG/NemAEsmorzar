import { Component, Input } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() places!: Place[];
}
