import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],
})
export class AddPlaceComponent implements OnInit {
  addPlaceForm!: FormGroup;
  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    this.addPlaceForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      location: [null, [Validators.required, Validators.maxLength(30)]],
      description: [null, [Validators.required, Validators.maxLength(300)]],
      rating: [
        null,
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
    });
  }

  getErrorMessage(field: string) {
    const formControl = this.addPlaceForm.get(field);
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

  submitPlace() {
    this.formValue = this.addPlaceForm.value;
  }

  submitForm() {
    if (this.addPlaceForm.valid) {
      this.placeService
        .addPlace(this.addPlaceForm.value)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // getNameError(){
  //   if(this.addPlaceForm.get('name')?.hasError('required')){
  //     return 'Debes introducir un nombre'
  //   }
  //   return this.addPlaceForm.get('name')?.hasError('maxLength')?
  //   'Máximo 30 carácteres' : '';
  // }
}
