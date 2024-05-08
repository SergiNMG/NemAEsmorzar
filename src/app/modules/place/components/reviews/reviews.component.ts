import { Component, Input } from '@angular/core';
import { Review } from 'src/app/interfaces/models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input() reviews: Review[] = {} as Review[];
}
