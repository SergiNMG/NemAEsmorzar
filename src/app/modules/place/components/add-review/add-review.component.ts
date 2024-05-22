import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Place } from 'src/app/interfaces/models/Place';
import { PlaceService } from 'src/app/services/place/place.service';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
  placeList: Place[] = [];
  addReviewForm!: FormGroup;
  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.getPlaces();
    this.generateAddReviewForm();
  }

  getPlaces() {
    this.placeService.places$.subscribe({
      next: (places) => {
        this.placeList = places;
      },
      error: (error) => console.error('Error while getting places', error),
    });
  }

  generateAddReviewForm() {
    this.addReviewForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.maxLength(200)]],
      rating: [
        null,
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
      placeId: [null, [Validators.required]],
    });
  }

  getErrorMessage(field: string) {
    const formControl = this.addReviewForm.get(field);
    if (!formControl) return '';
    if (formControl.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (formControl.hasError('maxLength')) {
      return 'Máximo de caracteres excedido';
    }
    if (formControl.hasError('max')) {
      return 'El valor máximo permitido es 5';
    }
    if (formControl.hasError('min')) {
      return 'El valor mínimo permitido es 0';
    }
    return '';
  }

  submitReview() {
    this.formValue = this.addReviewForm.value;
  }

  submitForm() {
    if (this.addReviewForm.valid) {
      this.reviewService
        .addReview(this.addReviewForm.value)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }
}
