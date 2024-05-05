import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent {
  @Input() rating!: number;

  fullStars!: number;
  allStars!: string[];

  ngOnChanges() {
    this.generateStars();
    this.fullStars = Math.trunc(this.rating);
    this.fillStars();
  }

  generateStars() {
    this.allStars = new Array(5).fill('bi-star');
  }

  fillStars() {
    this.allStars.fill('bi-star-fill', 0, this.fullStars);
    this.hasHalfStar() ? this.refillHalfStars() : null;
  }

  hasHalfStar(): boolean {
    return this.rating % 1 > 0;
  }

  refillHalfStars() {
    this.allStars[this.fullStars] = 'bi-star-half';
  }

  setStarColor(): string {
    return this.rating >= 0 && this.rating < 3
      ? 'text-danger'
      : this.rating <= 4
      ? 'text-warning'
      : 'text-success';
  }
}
